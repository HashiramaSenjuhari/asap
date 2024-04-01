import mongoose from "mongoose";

const connection = async () => {
  try {
    const mongooseConnection = await mongoose.connect(process.env.MONGODB_URL!);
    if (mongooseConnection) console.log("connected to db");
  } catch (err) {
    console.log(err);
  }
};
export default connection;