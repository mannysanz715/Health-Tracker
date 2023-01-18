
import { Profile } from "../models/profile.js";
import { User } from "../models/user.js";

function index(req, res){
  Profile.findById(req.params.id)
  .then(profile =>{
    console.log(profile)
    res.render('profile/index',{
      title: 'Your Profile',
      profile
    })
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
  console.log(req.body)
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



export{
  index,
  newProfile as new,
  createUser as create,
  addCalories,
  editCalories,
}