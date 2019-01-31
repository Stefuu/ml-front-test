import axios from 'axios'
import logger from '../config/logger'
import { formatProducts } from '../common/helpers'

export default (req, res) => {
  const {term, offset, limit} = req.params
  let url = `https://api.mercadolibre.com/sites/MLA/search?q=${term}`
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
