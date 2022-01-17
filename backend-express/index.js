import express from "express";

const app = express();

app.use(express.json());

app.get('/goobs', (req, res) => res.send("Gooble Gobble, I'm a turkey"))

const port = process.env.PORT || 5000;
app.listen( port, () => console.log("Server is alive!!"));