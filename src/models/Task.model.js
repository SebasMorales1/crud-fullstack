import mongoose from 'mongoose'

const TaskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    required: false,
    trim: true
  },
  date: {
    type: Date,
    default: Date.now
  }
})

export default mongoose.model('Task', TaskSchema)