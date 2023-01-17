import { Router } from 'express'
import * as caloriesCtrl from '../controllers/calories.js'


const router = Router()

router.post('/:id', caloriesCtrl.create)





export {
  router
}
