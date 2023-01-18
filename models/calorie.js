import mongoose from 'mongoose'

const Schema = mongoose.Schema

const caloriesSchema = new Schema({
  caloriesDay: Number,
  caloriesWeek: Number,
  calorieLimit: Number,
  caloriesBurned: Number
})

const Calories = mongoose.model('Calories', caloriesSchema)

export {
  Calories
  
}