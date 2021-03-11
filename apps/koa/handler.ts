import * as serverless from 'serverless-http';
import app from './src/app';

const handler = serverless(app);

export const start = async (event, context) => {
  const result = await handler(event, context);

  return result;
};
