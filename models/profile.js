import mongoose from 'mongoose'

const Schema = mongoose.Schema

const caloriesSchema = new Schema({
  caloriesDay: Number,
  caloriesWeek: Number,
  calorieLimit: Number,
  caloriesBurned: Number
})

const profileSchema = new Schema({
  name: String,
  avatar: String,
  heightFt: Number,
  heightIn: Number,
  weight: [Number],
  calories: [caloriesSchema],
  age: Number,
  sex: String,
  workouts: [{type: Schema.Types.ObjectId , ref: 'Workout'}],
  meals: [{ type: Schema.Types.ObjectId, ref: 'Meal'}],
  
}, {
  timestamps: true
})

const Profile = mongoose.model('Profile', profileSchema)

export {
  Profile
}
