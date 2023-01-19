import { Router } from 'express'
import * as profileCtrl from '../controllers/profiles.js'


const router = Router()

router.get('/new', profileCtrl.new)

router.get('/edit', profileCtrl.edit)

router.get('/:id/workouts', profileCtrl.workoutsIndex)

router.get('/editWeight', profileCtrl.editWeight)

router.get('/calories/edit', profileCtrl.editCalories)

router.post('/:id/meals', profileCtrl.addMeal)

router.post('/:id/workouts', profileCtrl.addWorkouts)

router.patch('/weight/:id', profileCtrl.updateWeight)

router.get('/:id', profileCtrl.index)

router.patch('/calories/:id', profileCtrl.addCalories)

router.patch('/:id', profileCtrl.create)

router.delete('/meal/:id', profileCtrl.mealClear)

export {
  router
}
