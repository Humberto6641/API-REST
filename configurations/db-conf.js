const mysql = require('mysql');

const mysqlConnection = mysql.createConnection({
    host:"g84t6zfpijzwx08q.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    user:"x0jvzkoe7vf8x1u2",
    password:"bc35lol3eb4q8u3v",
    database:"b1tckf9h5bw6m6fr",
    multipleStatements: true
  });

  mysqlConnection.connect(function (err) {
    if (err) {
      console.error(err);
      return;
    } else {
      console.log('En linea...');
    }
  });

  module.exports = mysqlConnection;