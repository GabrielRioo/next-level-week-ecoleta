const express = require("express") //para iniciar o servidor
const { configure } = require("nunjucks")
const server  = express()

// Pegar o banco de dados
const db = require("./database/db.js")

//Configurar pasta publica
server.use(express.static("public"))

// habilita o uso do req.body na aplicação
server.use(express.urlencoded({extended: true}))

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

// req query: Query String da nossa url (retorna as strings que esta na URL)
console.log(req.query)

    return res.render("create-point.html")
})

server.post("/savepoint", (req, res) => {
    // console.log(req.body)

    // Inserir dados no banco de dados
    const query = ` 
        INSERT INTO places (image, name, adress, adress2, state, city, items) 
        VALUES (?,?,?,?,?,?,?); 
        `

    const values = [
        req.body.image,
        req.body.name,
        req.body.adress,
        req.body.adress2,
        req.body.state,
        req.body.city,
        req.body.items
    ]

    function afterInsertData(err) {
        if (err) {
            console.log(err)
            return res.send("Erro no cadastro")
        }
        console.log("Cadastro realizado com sucesso!")
        console.log(this) // retorna o run

        return res.send("create-point.html", { saved: true })
    }

    // funçao de callback(err) caso der erro durante a execução
    db.run(query, values, afterInsertData)

   
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