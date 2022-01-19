import express from "express";
import { Question } from "../models/question.js";

const QuestionsRouter = express.Router();

QuestionsRouter.get('/', (req, res) => {
    Question.find()
        .then(questions => res.json(questions))
            .catch(err => res.status(404).json(err))
})

QuestionsRouter.post('/', (req, res) => {
    const newQuestion = new Question({
        name: req.body.name, 
        content: req.body.content
    });

    newQuestion.save()
        .then(question => res.json(question))
            .catch(err => res.status(404).json(err))
})

QuestionsRouter.delete('/:question_id', (req, res) => {
    const _id = req.params.question_id;
    Question.findOneAndDelete({_id: _id})
        .then(question => res.json({_id: question._id}))
            .catch(err => res.status(404).json(err))
})

export default QuestionsRouter;