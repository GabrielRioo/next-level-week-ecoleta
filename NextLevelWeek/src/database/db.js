// Importar a dependencia do sqlite
//verbose mostra mensagem no terminal sem que acontecer alguma coisa
const sqlite3 = require("sqlite3").verbose() 

// Criar o objeto que irá fazer operações no banco de dados
const db = new sqlite3.Database("./src/database/database.db")

// utilizar o objeto de banco de dados, para nossas operações
db.serialize(() => {
    // Com comandos SQLite vou:
    // 1. Criar uma tabela
    db.run(`
        CREATE TABLE IF NOT EXISTS places ();
    `)
    // 2. Inserir dados na tabela

    // 3. Consultar os dados da tabela

    // 4. Deteleta os dados da tabela
})