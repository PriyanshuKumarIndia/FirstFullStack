// models/userModel.js

import mongoose from "mongoose";

// A Mongoose schema defines the structure of the document,
// default values, validators, etc.
const userSchema = mongoose.Schema(
  {
    // Define the 'name' field
    name: {
      type: String,
      required: [true, "Please add a name"], // This field is required
    },
    // Define the 'email' field
    email: {
      type: String,
      required: [true, "Please add an email"], // This field is required
      unique: true, // Each email must be unique in the collection
    },
    // Define the 'password' field
    password: {
      type: String,
      required: [true, "Please add a password"], // This field is required
    },
  },
  {
    // The `timestamps` option automatically adds `createdAt` and `updatedAt` fields
    // to the schema.
    timestamps: true,
  }
);

// Create the model from the schema.
// A Mongoose model is a wrapper on the Mongoose schema that provides an interface
// for the database for creating, querying, updating, deleting records, etc.
// The first argument is the singular name of the collection your model is for.
// Mongoose automatically looks for the plural, lowercased version of your model name.
// Thus, for the model 'User', Mongoose will create/use the collection 'users'.
const User = mongoose.model("User", userSchema);

export default User;
