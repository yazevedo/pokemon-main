const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '', // coloque sua senha aqui
  database: 'pokemon_crud' // certifique-se que o banco já existe
});

connection.connect((err) => {
  if (err) throw err;
  console.log('🟢 Conectado ao MySQL!');
});

module.exports = connection;
