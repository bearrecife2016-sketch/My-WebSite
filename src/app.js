import "dotenv/config";
import express from "express";

const app = express();
const PORT = process.env.PORT || 3000;

app.set("view engine", "ejs");
app.set("views", "./src/views");

app.use(express.static("./src/public"));

app.get("/", (req, res) => {
    res.status(200).render("home");
});

app.use((req, res) => {
    res.status(404).send("Página não encontrada");
});

export default app;