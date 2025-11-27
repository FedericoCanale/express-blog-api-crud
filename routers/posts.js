
const express = require("express");
const router = express.Router();


const postsController = require("../controllers/posts");

// INDEX 
router.get("/", postsController.index);

// SHOW 
router.get("/:id", postsController.show);

// CREATE 
router.post("/", postsController.store);

// UPDATE 
router.put("/:id", postsController.update);

// UPDATE PARZIALE
router.patch("/:id", postsController.modify);

// DELETE 
router.delete("/:id", postsController.destroy);

module.exports = router;

/* Chiamate su postman
    - GET http://localhost:3000/posts lista dei post
    - GET GET http://localhost:3000/posts?tag=dolci solo i tag
    - GET http://localhost:3000/posts/1 dettaglio dei singoli post
    - POSTS http://localhost:3000/posts creare nuovi post
    - PUT http://localhost:3000/posts/1 aggiornare tutto un post
    - PATCH http://localhost:3000/posts/1 Aggiornare parzialmente un post
    - DELETE http://localhost:3000/posts/1 eliminare un post
    - GET http://localhost:3000/imgs/posts/ciambellone.jpeg per testare le immagini 
    
    New Post to insert from Postman using the verb POST and http://localhost:3000/posts: 
    {
    title: "Torta della nonninna",
    content: `Che buona che è la torta dela mia nonninna`,
    tags: ["Dolci", "Dolci alla crema", "Torte"],
  },
    */
