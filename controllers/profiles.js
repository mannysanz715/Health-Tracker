
import { Profile } from "../models/profile.js";
import {Meal} from "../models/meal.js"

function index(req, res){
  Profile.findById(req.params.id)
  .populate('meals')
  .then(profile =>{
    Meal.find({_id: {$nin: profile.meals}})
    .then(meals =>{
      res.render('profile/index',{
        title: 'Your Profile',
        profile,
        meals
    })
    })
  })
}

function edit(req,res){
  res.render('profile/edit', {
    title: 'Change Personal Details'
  })
}

function updateWeight(req, res){
  Profile.findById(req.params.id)
  .then(profile =>{
    profile.weight.unshift(req.body.weight)
    profile.save()
    res.redirect('/profile/' + profile._id)
  })
}

function editWeight(req, res){
  res.render('profile/newWeight', {
    title: 'Record a New Weight'
  })
}


function newProfile(req, res){
  res.render('profile/new',{
    title: 'Add your info :'
  })
}

function createUser(req, res){
  console.log(req.params.id)
  for (let key in req.body) {
    if(req.body[key] === "") delete req.body[key]
  }
  Profile.findByIdAndUpdate(req.params.id, req.body, {new: true})
  .then( profile =>{
    res.redirect('/')
  })
}

function editCalories(req,res){
  res.render('calories/edit', {
    title: 'Add Calorie Info:'
  })
}

function addCalories(req, res){
  for (let key in req.body) {
    if(req.body[key] === "") delete req.body[key]
  }
  Profile.findByIdAndUpdate(req.params.id, req.body, {new: true})
  .then( profile =>{
    res.redirect('/profile/' + profile._id)
  })
}

function addMeal(req, res){
  Profile.findById(req.params.id)
  .then(profile =>{ 
    console.log(req.body.meals)
    profile.meals.push(req.body.meals)
    profile.save()
    .then(res.redirect('/profile/' + profile._id))
  })

}

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) return next()
  res.redirect('/profiles')
}

export{
  index,
  edit,
  editWeight,
  updateWeight,
  newProfile as new,
  createUser as create,
  addCalories, 
  addMeal,
  isLoggedIn,
  editCalories,
}