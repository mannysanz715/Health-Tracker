import mongoose, { isObjectIdOrHexString } from 'mongoose'

const Schema = mongoose.Schema

const mealSchema = new Schema({
  name: String,
  calories: Number,
  owner: String,
}, {
  timestamps: true,
})

const Meal = mongoose.model('Meal', mealSchema)

export {
  Meal
}
