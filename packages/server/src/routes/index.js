import { Router } from 'express'
import api from '../api'

const router = new Router()

router.get('/api/items/:term/:offset?/:limit?', api.search)

export default router
