var mysql = require('mysql');

var connection = mysql.createConnection({
    host     : '127.0.0.1',
    database : 'picturecomments',
    user     : 'root',
    password : '0000',
    charset  : 'utf8mb4_unicode_ci'
});

module.exports = connection;