import mongoose from 'mongoose';

const QuestionsSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    content: {
        type: String, 
        required: true,
    }
}, {
    timestamps: true
})

export const Question = mongoose.model('Question', QuestionsSchema);