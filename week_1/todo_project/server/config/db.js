import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const dbInstance = await mongoose.connect(
      `${process.env.MONGO_URI}/TODO_APP`
    );
    console.log(
      `\n☘️ MongoDB connected! Db host: ${dbInstance.connection.host} \n`
    );
  } catch (e) {
    console.log("MongoDB connection Error");
    process.exit(1);
  }
};
