import { Router } from 'express'
import * as profileCtrl from '../controllers/profiles.js'


const router = Router()

router.get('/new', profileCtrl.new)

router.get('/calories/edit', profileCtrl.editCalories)

router.get('/:id', profileCtrl.index)

router.patch('/calories/:id', profileCtrl.addCalories)

router.patch('/:id', profileCtrl.create)

export {
  router
}
