const express = require("express");
const router = express.Router();
const posts = require("../data/posts");

// INDEX (bonus)
router.get("/", (req, res) => {
    res.json(posts);
});


// SHOW (bonus)
router.get("/:id", (req, res) => {
    const id = Number(req.params.id);          // converto l'id in numero
    const post = posts.find((p) => p.id === id); // cerco il post

    if (!post) {
        // se non lo trovo, mando un messaggio semplice
        return res.status(404).json({ message: "Post non trovato" });
    } else {
        // altrimenti mando il post
        return res.json(post);
    }
});

// CREATE 
router.post("/", (req, res) => {
    res.send("Creazione di un nuovo post");
});

// UPDATE 
router.put("/:id", (req, res) => {
    res.send(`Aggiornamento completo del post ${req.params.id}`);
});

// UPDATE 
router.patch("/:id", (req, res) => {
    res.send(`Aggiornamento parziale del post ${req.params.id}`);
});

// DELETE 
router.delete("/:id", (req, res) => {
    res.send(`Cancellazione del post ${req.params.id}`);
});

module.exports = router;

/* Chiamate su postman
    - GET http://localhost:3000/posts lista dei post
    - GET http://localhost:3000/posts/1 dettaglio dei singoli post
    - POSTS http://localhost:3000/posts creare nuovi post
    - PUT http://localhost:3000/posts/1 aggiornare tutto un post
    - PATCH http://localhost:3000/posts/1 Aggiornare parzialmente un post
    - DELETE http://localhost:3000/posts/1 eliminare un post
    - GET http://localhost:3000/imgs/posts/ciambellone.jpeg per testare le immagini */