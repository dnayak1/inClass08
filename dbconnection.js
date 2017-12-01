var mysql = require('mysql');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'liverpool',
  database : 'inClass08'
});

exports.connection=connection;
