import mongoose from 'mongoose'

const Schema = mongoose.Schema

const workoutSchema = new Schema({
  name: String,
  duration: Number,
  avgHeartRate: Number,
  maxHeartRate: Number,
}, {
  timestamps: true,
})

const Workout = mongoose.model('Workout', workoutSchema)

export {
  Workout
}
