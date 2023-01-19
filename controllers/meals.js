import { Meal } from '../models/meal.js'
import { User } from '../models/user.js'

function index(req, res){
  Meal.find({})
  .then( meals =>{
    res.render('meals/index', {
      title: 'Meals',
      meals
    })
  })
}

function newMeal(req, res){
  res.render('meals/new', {
    title: 'New Meal'
  })
}

function create(req, res){
  Meal.create(req.body)
  .then(meal =>{
    res.redirect('/meals')
  })
}

function deleteMeal(req, res){
  Meal.findByIdAndDelete(req.params.id)
  .then(meal=>{
    res.redirect('/meals')
  })
}

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) return next()
  res.redirect('/meals')
}

export{
index,
isLoggedIn,
newMeal as new,
create,
deleteMeal as delete,

}