import mongoose from 'mongoose'

export const DBconnection = async () => {
  try {
    await mongoose.connect('mongodb://127.0.0.1:27017/crud')
    console.log('>>> Database is connected')
  } catch (error) {
    console.log('Error in database connection: ' + error)
  }
}