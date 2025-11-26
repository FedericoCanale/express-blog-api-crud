
const posts = require("../data/posts");

function index(req, res) {
    const tag = req.query.tag;
    if (!tag) {
        return res.json(posts);
    }
    const normalizedTag = tag.charAt(0).toUpperCase() + tag.slice(1);
    const filtered = posts.filter(post => post.tags.includes(normalizedTag));
    if (filtered.length === 0) {
        return res.status(404).json({ message: "Nessun post trovato con questo tag" });
    }
    return res.json(filtered);
}


function show(req, res) {
    const id = Number(req.params.id);
    const post = posts.find((p) => p.id === id);

    if (!post) {
        return res.status(404).json({ message: "Post non trovato" });
    } else {
        return res.json(post);
    }
}


function store(req, res) {
    res.send("Creazione di un nuovo post");
}


function update(req, res) {
    res.send(`Aggiornamento completo del post ${req.params.id}`);
}


function modify(req, res) {
    res.send(`Aggiornamento parziale del post ${req.params.id}`);
}


function destroy(req, res) {
    const id = Number(req.params.id);
    const index = posts.findIndex(p => p.id === id);

    if (index === -1) {
        return res.status(404).json({ message: "Post non trovato" });
    }
    posts.splice(index, 1);
    console.log("Lista aggiornata dei post:", posts);
    return res.sendStatus(204);
}

module.exports = {
    index,
    show,
    store,
    update,
    modify,
    destroy,
};