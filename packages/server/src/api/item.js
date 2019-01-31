import axios from 'axios'
import logger from '../config/logger'
import { formatItem } from '../common/helpers'
import { baseUrl } from '../common/constants'

export default async (req, res) => {
  const { id } = req.params

  try {
    const idApiData = await axios(`${baseUrl}/item/${id}`)
    const descriptionApiData = await axios(`${baseUrl}/item/${id}/description`)
    const data = formatItem(idApiData, descriptionApiData)
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
