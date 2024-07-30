import mongoose, { Schema } from 'mongoose';

export const goalSchema: Schema = new mongoose.Schema({
    createdBy: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'user',
    },
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    }
})