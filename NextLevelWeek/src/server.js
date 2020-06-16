const express = require("express") //para iniciar o servidor
const { configure } = require("nunjucks")
const server  = express()

//Configurar pasta publica
server.use(express.static("public"))

// utilizando template engine.
const nunjucks = require("nunjucks")
nunjucks.configure("src/views", {
    express: server,
    noCache: true
})

//configurar camminhos da minha aplicação
//pagina inicial
//req - requisição
//res - resposta
server.get("/", (req, res) => {
    return res.render("index.html",{ 
        title: "Um Titulo" })
})

server.get("/create-point", (req, res) => {
    return res.render("create-point.html")
})

server.get("/search", (req, res) => {
    return res.render("search-results.html")
})

//ligar o servidor
server.listen(3000)