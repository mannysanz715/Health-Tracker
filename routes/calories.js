import { Router } from 'express'
import * as caloriesCtrl from '../controllers/calories.js'


const router = Router()

router.get('/edit', caloriesCtrl.edit)

router.post('/', caloriesCtrl.create)



export {
  router
}
