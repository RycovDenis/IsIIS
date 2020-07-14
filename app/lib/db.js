const mysql = require('mysql'),
{configs} = require('../lib/functions');
// console.log(configs('','db.json').get('mysql:host'));
connection = mysql.createConnection({
        host     : configs('db.json').get('mysql:host'),
        port     : configs('db.json').get('mysql:port'),
        user     : configs('db.json').get('mysql:user'),
        password : configs('db.json').get('mysql:password'),
        database : configs('db.json').get('mysql:database'),
        charset  : configs('db.json').get('mysql:charset'),
        timeout  : configs('db.json').get('mysql:timeout')
        });
    console.log("Connected to Mysql "+configs('db.json').get('mysql:database')+" Remote server");
    connection.connect(function(err) {
        if (err) throw err;
    });
    module.exports = connection;
