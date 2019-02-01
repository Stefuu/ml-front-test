import { Router } from 'express'
import api from '../api'

const router = new Router()

router.get('/api/items', api.search)
router.get('/api/items/:id', api.item)

export default router
