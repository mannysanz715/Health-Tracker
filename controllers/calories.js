import { Calories } from "../models/calorie.js";

  function edit(req, res){
    res.render('calories/edit', {
      title: 'Calorie Info:'
    })
  }

  function create(req, res){
    Calories.create(req.body)
    .then(calories =>{
      res.redirect('/')})
  }

export {
  edit,
  create

}