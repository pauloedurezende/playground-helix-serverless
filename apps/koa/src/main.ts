import logger from '@playground/logger';
import app from './app';

const port = process.env.PORT || 3000;

app.listen(port, () => {
  logger.log('info', 'GraphQL server is running on port %s', port);
});
