import mongoose from 'mongoose'

const Schema = mongoose.Schema

const workoutSchema = new Schema({

}, {
  timestamps: true,
})

const Workout = mongoose.model('Workout', workoutSchema)

export {
  Workout
}
