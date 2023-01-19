import { Router } from 'express'
import * as mealsCtrl from '../controllers/meals.js'

const router = Router()

router.get('/', mealsCtrl.isLoggedIn, mealsCtrl.index)

router.get('/new', mealsCtrl.isLoggedIn, mealsCtrl.new)

router.post('/', mealsCtrl.isLoggedIn, mealsCtrl.create)

router.delete('/:id', mealsCtrl.isLoggedIn, mealsCtrl.delete)


export {
  router
}
