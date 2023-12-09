import { Router } from 'express'
import { store, index, update, show, deleteOne } from '../controllers/Task.controller.js' 

const router = Router()

router.post('/tasks', store)
router.get('/tasks', index)
router.get('/tasks/:id', show)

router.put('/tasks/:id', update)
router.delete('/tasks/:id', deleteOne)

export default router