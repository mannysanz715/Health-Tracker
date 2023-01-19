import { Router } from 'express'
import * as profileCtrl from '../controllers/profiles.js'


const router = Router()

router.get('/new', profileCtrl.isLoggedIn, profileCtrl.new)

router.get('/edit', profileCtrl.isLoggedIn, profileCtrl.edit)

router.get('/:id/workouts', profileCtrl.isLoggedIn, profileCtrl.workoutsIndex)

router.get('/editWeight',profileCtrl.isLoggedIn, profileCtrl.editWeight)

router.get('/calories/edit', profileCtrl.isLoggedIn, profileCtrl.editCalories)

router.post('/:id/meals', profileCtrl.isLoggedIn, profileCtrl.addMeal)

router.post('/:id/workouts', profileCtrl.isLoggedIn, profileCtrl.addWorkouts)

router.patch('/weight/:id', profileCtrl.isLoggedIn, profileCtrl.updateWeight)

router.get('/:id', profileCtrl.isLoggedIn, profileCtrl.index)

router.patch('/calories/:id', profileCtrl.isLoggedIn, profileCtrl.addCalories)

router.patch('/:id', profileCtrl.isLoggedIn, profileCtrl.create)

router.delete('/workout/:id/:workoutId', profileCtrl.workoutDelete)

router.delete('/meal/:id', profileCtrl.mealClear)

export {
  router
}
