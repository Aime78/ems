import mongoose, { Schema } from 'mongoose';

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
  phone: String || null,
  address: {
    street: String || null,
    city: String || null,
    state: String || null,
    postalCode: String || null,
    country: String || null,
  },

  title: String,
  department: String,
  manager: String, // Reference to another user document

  skills: { type: [String] },
});
