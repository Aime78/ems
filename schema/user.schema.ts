import mongoose, { Schema } from "mongoose";

export const userSchema: Schema = new mongoose.Schema({
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
        type: String,
        required: true,
      },
      email: {
        type: String,
        required: true,
      },
      password: {
        type: String,
        required: true,
      },
      role: {
        type: String,
        required: true,
      },
      contactInfo: {
        phone: String,
        address: {
          street: String,
          city: String,
          state: String,
          postalCode: String,
          country: String
        }
      },
      jobInfo: {
        title: String,
        department: String,
        hireDate: Date,
        manager: String, // Reference to another user document
      },
      skills: { type: [String]},
    // database: 'carmart',
    // collection: 'user',
  });