import express from "express";

const app = express();

app.use(express.json());

const port = process.env.port || 5000;

app.use('/goobs', (req, res) => res.send("Gooble, gobble. One of us!"))

app.listen(port, () => console.log(`Server is running on ${port}`))