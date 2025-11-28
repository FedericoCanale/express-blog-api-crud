
const express = require("express");

const app = express();
const PORT = 3000;
const errorsHandler = require("./middlewares/errorsHandler");


app.use(express.static("public"));
app.use(express.json());

app.use(express.static("public"));

app.use(express.json());

const postsRouter = require("./routers/posts");


app.use("/posts", postsRouter);

app.get("/", (req, res) => {
    res.send("Homepage del blog");
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});