import mongoose, { Schema } from 'mongoose';

export const salarySchema: Schema = new mongoose.Schema({
    user: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'user',
    },
    payPeriodStart: {
        type: String,
        required: true,
    },
    payPeriodEnd: {
        type: String,
        required: true,
    },
    salary: {
        type: Number,
        required: true,
    },
    bonus: {
        type: Number,
    },
    deductions: {
        type: Number,
    },
    netPay: {
        type: Number,
    },
    generatedAt: {
        type: Date,
        required: true,
    },
})