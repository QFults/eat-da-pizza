module.exports = require('mysql2').createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'pizza_db'
})
