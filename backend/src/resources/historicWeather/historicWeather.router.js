import { Router } from 'express'
import controllers from './historicWeather.controller'

const router = Router()

// /api/historicWeather
router
  .route('/')
  .get(controllers.getOne)
  .post(controllers.createOne)

// /api/historicWeather/:id
router
  .route('/:id')
  .get(controllers.getOne)
  .put(controllers.updateOne)
  .delete(controllers.removeOne)

export default router
