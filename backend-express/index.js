import express from "express";
import mongoose from "mongoose";
import QuestionsRouter from "./questions/questions.js";
import { MONGO_URI } from "./config/keys.js";

const app = express();

app.use(express.json());

mongoose
    .connect(MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true})
        .then(res => console.log("Connected to MongoDB!!"))
            .catch(err => console.log(err))

const port = process.env.port || 5000;

app.use('/goobs', (req, res) => res.send("Gooble, gobble. One of us!"))

app.listen(port, () => console.log(`Server is running on ${port}`))

app.use('/api/questions', QuestionsRouter )