import express from "express";

const router = express.Router();

router.get('/', (req, res) => {
    const questions = [
            { _id: 1, name: 'Vladimir Harkonnen', content: 'Am I the drama?' },
            { _id: 2, name: 'Lady Jessica', content: 'Is Paul the Kwisatz Haderach?' },
            { _id: 3, name: 'Paul Atreides', content: 'Why are my dreams so sandy?' },
        ];

    res.json(questions);
})

router.post('/', (req, res) => {
    res.json(req.body)
})

router.delete('/:question_id', (req, res) => {
    const _id = req.params.question_id;

    res.json(_id)
})

export default router;