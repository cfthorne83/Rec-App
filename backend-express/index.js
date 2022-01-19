import express from "express";
import QuestionsRouter from "./questions/questions.js";

const app = express();

app.use(express.json());

const port = process.env.port || 5000;

app.use('/goobs', (req, res) => res.send("Gooble, gobble. One of us!"))

app.listen(port, () => console.log(`Server is running on ${port}`))

app.use('/api/questions', QuestionsRouter )