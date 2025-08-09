import mongoose from "mongoose";

const connectMongoose = async () => {
  try {
    if (process.env.MONGODB_URL) {
        await mongoose.connect(process.env.MONGODB_URL);
        console.log('Server is connected')
    }
  } catch (error) {
      console.log(error)
  }
};

export default connectMongoose;