import { Router } from 'express'
import * as mealsCtrl from '../controllers/meals.js'

const router = Router()

router.get('/', mealsCtrl.index)

router.get('/new', mealsCtrl.isLoggedIn, mealsCtrl.new)

router.post('/', mealsCtrl.create)

router.delete('/:id', mealsCtrl.delete)


export {
  router
}
