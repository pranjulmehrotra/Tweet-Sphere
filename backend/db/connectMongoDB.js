import mongoose from "mongoose";

const connectMongoDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      // MongoDB connection options (if needed, though most are now defaults)
    });
    console.log("Connected to MongoDB database");
  } catch (error) {
    throw new Error(`MongoDB connection failed: ${error.message}`);
  }
};

export default connectMongoDB;
