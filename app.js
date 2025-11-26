
const express = require("express");

const app = express();
const PORT = 3000;

app.use(express.json());


app.use(express.static("public"));


const postsRouter = require("./routers/posts");


app.use("/posts", postsRouter);

app.get("/", (req, res) => {
    res.send("Homepage del blog");
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});