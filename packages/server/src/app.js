import http from 'http'
import axios from 'axios'
import express from 'express'
import logger from './config/logger/index'
import routes from './routes'

axios.defaults.baseURL = 'https://api.mercadolibre.com/sites/MLA/'
const port = process.env.SERVER_PORT || 8088
const app = express()

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
  next()
})

app.use(routes)

export const server = http.createServer(app)

export default () => {
  server.listen(port)
  server.on('listening', () => {
    logger.info(`[server] connected at: ${port}`)
  })
  server.on('error', (err) => {
    logger.info(`[server] error: ${JSON.stringify(err, false, 2)}`)
  })
}
