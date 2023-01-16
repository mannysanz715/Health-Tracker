import { Profile } from "../models/profile.js";
import { User } from "../models/user.js";

function createUser(req, res){
  console.log(req.params.id)
  User.findById(req.params.id)
  .then(user =>{
    Profile.findByIdAndUpdate(user?.profile._id, req.body, {new: true})
    .then(res.render('index',{
      title: 'Home'
    }))
  })
}

export{
  createUser as create,

}