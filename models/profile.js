import mongoose from 'mongoose'

const Schema = mongoose.Schema

const workoutSchema = new Schema({
  name: String,
  duration: Number,
  heartRateAvg: Number,
})

const profileSchema = new Schema({
  name: String,
  avatar: String,
  heightFt: Number,
  heightIn: Number,
  weight: [Number],
  calorieLimit: Number,
  age: Number,
  sex: String,
  workouts: [workoutSchema],
  meals: [{ type: Schema.Types.ObjectId, ref: 'Meal'}],
  
}, {
  timestamps: true
})

const Profile = mongoose.model('Profile', profileSchema)

export {
  Profile
}
