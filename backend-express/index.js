import express from "express";
import mongoose from "mongoose";
import { questions } from "./routes/questions.js";
import { MONGO_URI } from "./config/keys.js";

const app = express();

app.use(express.json());

mongoose
    .connect( MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => console.log("Connected to MongoDB!!"))
            .catch(err => console.log(err));

app.get('/goobs', (req, res) => {
    res.send("Gooble Gobble, I'm a turkey")
});

app.use('/api/questions', questions)

const port = process.env.PORT || 5000;
app.listen( port, () => console.log(`Server is running on port ${port}!!`));