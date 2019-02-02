import axios from 'axios'
import logger from '../config/logger'
import { formatProducts } from '../components/modules/helpers'
import { baseUrl } from '../components/modules/constants'

export default (req, res) => {
  const {q, offset, limit} = req.query
  let url = `${baseUrl}/sites/MLA/search?q=${q}`
  if (offset) url += `&offset=${offset}`
  if (limit) url += `&limit=${limit}`

  axios(url)
    .then(json => {
      const data = formatProducts(json.data)
      res.setHeader('Content-Type', 'application/json')
      res.json(data)
    })
    .catch(err => {
      logger.error(err)
      if (err && err.response && err.response.status) {
        res.sendStatus(err.response.status)
      } else {
        res.sendStatus(500)
      }
    })
}
