import { createLogger, transports, format } from 'winston'
const { timestamp, colorize, simple, printf } = format

const formatter = printf((info) => {
  return `${info.timestamp} ${info.level}: ${info.message}`
})

const logger = createLogger({
  level: process.env.SERVER_LOGGER_LEVEL,
  format: format.combine(
    timestamp(),
    colorize(),
    simple(),
    formatter
  ),
  transports: [
    new transports.Console()
  ]
})

logger.stream = {
  write: function (message, encoding) {
    logger.info(message.replace('\n', ''))
  }
}

export default logger
