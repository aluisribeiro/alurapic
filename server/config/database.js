var mysql = require('mysql');

function createDBConnection(){
  return mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: 'root',
    database: 'alurapic'
  });
}

module.exports = function(){
  return createDBConnection;
}