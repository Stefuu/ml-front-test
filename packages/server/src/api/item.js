import axios from 'axios'
import logger from '../config/logger'
import { formatItem } from '../components/modules/helpers'
import { baseUrl } from '../components/modules/constants'

export default async (req, res) => {
  const { id } = req.params

  try {
    const itemJson = await axios(`${baseUrl}/items/${id}`)
    const descriptionJson = await axios(`${baseUrl}/items/${id}/description`)
    const data = formatItem(itemJson.data, descriptionJson.data)
    res.setHeader('Content-Type', 'application/json')
    res.json(data)
  } catch (err) {
    logger.error(err)
    if (err && err.response && err.response.status) {
      res.sendStatus(err.response.status)
    } else {
      res.sendStatus(500)
    }
  }
}
