// config/db.js

import mongoose from "mongoose";

// This function establishes the connection to the MongoDB database.
const connectDB = async () => {
  try {
    // mongoose.connect() returns a promise, so we use 'await'.
    // We get the connection string from our environment variables.
    const conn = await mongoose.connect(process.env.MONGO_URI);

    // If the connection is successful, log it to the console.
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    // If there's an error connecting, log the error message and exit the process.
    console.error(`Error: ${error.message}`);
    // process.exit(1) exits the Node.js process with a 'failure' code.
    process.exit(1);
  }
};

export default connectDB;
