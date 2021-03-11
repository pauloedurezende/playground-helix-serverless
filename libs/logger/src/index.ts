import { transports, format, createLogger } from 'winston';

const logger = createLogger({
  level: 'info',
  format: format.combine(format.splat(), format.simple()),
  transports: [new transports.Console()],
});

export default logger;
