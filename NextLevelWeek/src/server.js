const express = require("express") //para iniciar o servidor
const { configure } = require("nunjucks")
const server  = express()

// Pegar o banco de dados
const db = require("./database/db.js")

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

    PAREI EM 1 HORA E 10 MINUTOS

    return res.render("create-point.html")
})




server.get("/search", (req, res) => {
    db.all(`SELECT * FROM places`, function (err, rows) {
                if (err) {
                    return console.log(err)
                }
                console.log("Aqui estão os registros: ")
                console.log(rows)

                const total = rows.length

                //mostrar a pagina html com os dados do banco de dados
                return res.render("search-results.html", { places: rows, total })
            })

    
})

//ligar o servidor
server.listen(3000)