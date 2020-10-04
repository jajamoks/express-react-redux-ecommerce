import mongoose from 'mongoose'

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useUnifiedTopologyP: true,
      useNewUrlParser: true,
      useCreateIndex: true,
    })
    console.log(`mongodb connected: ${conn.connection.host}`.cyan.underline)
  } catch (error) {
    console.error(`Error: ${$error.message}`.red.underline.bold)
  }
}

export default connectDB
