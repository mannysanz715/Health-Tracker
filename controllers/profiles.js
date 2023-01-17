import { Profile } from "../models/profile.js";
import { User } from "../models/user.js";

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
  edit,
  createUser as create,

}