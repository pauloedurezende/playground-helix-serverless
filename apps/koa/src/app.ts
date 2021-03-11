import Koa from 'koa';
import bodyParser from 'koa-bodyparser';
import cors from '@koa/cors';

import graphql from './graphql';

const app = new Koa();

app.use(cors());
app.use(bodyParser());
app.use(graphql.routes(), graphql.allowedMethods());

export default app;
