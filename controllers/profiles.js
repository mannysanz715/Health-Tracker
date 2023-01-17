import { Profile } from "../models/profile.js";
import { User } from "../models/user.js";

function index(req, res){
  Profile.findById(req.params.id)
  .then(profile =>{
    res.render('profile/index',{
      title: 'Your Profile',
      profile
    })
  })
}


function edit(req, res){
  res.render('profile/edit',{
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

export{
  index,
  edit,
  createUser as create,

}