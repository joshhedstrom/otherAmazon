const mysql = require('mysql');

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  port: 3306,
  database: 'other_amazon_db',
});

connection.connect((err) => {
  if (err) return console.log(`ERROR: ${err}`);
  console.log("Connected!");
});