// Importar a dependencia do sqlite
//verbose mostra mensagem no terminal sem que acontecer alguma coisa
const sqlite3 = require("sqlite3").verbose()

// Criar o objeto que irá fazer operações no banco de dados
const db = new sqlite3.Database("./src/database/database.db")

module.exports = db
// utilizar o objeto de banco de dados, para nossas operações
// db.serialize(() => {
//     // Com comandos SQLite vou:
//     // 1. Criar uma tabela
//     db.run(`
//         CREATE TABLE IF NOT EXISTS places (
//             id INTEGER PRIMARY KEY AUTOINCREMENT,
//             image TEXT,
//             name TEXT,
//             adress TEXT,
//             adress2 TEXT,
//             state TEXT,
//             city TEXT,
//             items TEXT

//         );
//     `)
//     // 2. Inserir dados na tabela
//     const query = ` 
//         INSERT INTO places (image, name, adress, adress2, state, city, items) 
//         VALUES (?,?,?,?,?,?,?); 
//         `

//     const values = [
//         "https://images.unsplash.com/photo-1516992654410-9309d4587e94?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
//         "Papersider",
//         "guilherme Gemballa, Jardim Améica",
//         "Nº 260",
//         "Santa Catarina",
//         "Rio do Sul",
//         "Papéis e Papelão"
//     ]

//     function afterInsertData(err) {
//         if (err) {
//             return console.log(err)
//         }
//         console.log("Cadastro realizado com sucesso!")
//         console.log(this) // retorna o run
//     }

//     // funçao de callback(err) caso der erro durante a execução
//     db.run(query, values, afterInsertData)
    
//     // 4. Deteleta os dados da tabela
//     // db.run(`DELETE FROM places WHERE id = ?`, [3], function(err) {
//     //     if (err) {
//     //         return console.log(err)
//     //     }
//     //     console.log("Registro efetuado com sucesso!")
//     // })

//     // 3. Consultar os dados da tabela
//     db.all(`SELECT * FROM places`, function (err, rows) {
//         if (err) {
//             return console.log(err)
//         }
//         console.log("Aqui estão os registros: ")
//         console.log(rows)
//     })
// })