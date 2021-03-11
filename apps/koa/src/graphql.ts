import KoaRouter from 'koa-router';
import { PassThrough } from 'stream';
import {
  getGraphQLParameters,
  processRequest,
  renderGraphiQL,
  shouldRenderGraphiQL,
} from 'graphql-helix';
import schema from '@playground/schema';

const router = KoaRouter();

router.all('/graphql', async (ctx) => {
  const request = {
    body: ctx.request.body,
    headers: ctx.req.headers,
    method: ctx.request.method,
    query: ctx.request.query,
  };

  if (shouldRenderGraphiQL(request)) {
    ctx.body = renderGraphiQL({});
  } else {
    const { operationName, query, variables } = getGraphQLParameters(request);

    const result = await processRequest({
      operationName,
      query,
      variables,
      request,
      schema,
    });

    if (result.type === 'RESPONSE') {
      result.headers.forEach(({ name, value }) =>
        ctx.response.set(name, value)
      );
      ctx.status = result.status;
      ctx.body = result.payload;
    }
  }
});

export default router;
