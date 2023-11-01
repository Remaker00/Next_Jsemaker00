// utils/dbConnect.js
import mongoose from 'mongoose';

const dbConnect = async () => {
  if (mongoose.connection.readyState === 0) {
    try {
      await mongoose.connect(process.env.MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
    } catch (error) {
      console.error('MongoDB connection error:', error);
    }
  }
};

export default dbConnect;
