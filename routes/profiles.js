import { Router } from 'express'
import * as profileCtrl from '../controllers/profiles.js'


const router = Router()

router.get('/new', profileCtrl.new)

router.get('/editWeight', profileCtrl.editWeight)

router.get('/calories/edit', profileCtrl.editCalories)

router.patch('/weight/:id', profileCtrl.updateWeight)

router.get('/:id', profileCtrl.index)

router.patch('/calories/:id', profileCtrl.addCalories)

router.patch('/:id', profileCtrl.create)

export {
  router
}
