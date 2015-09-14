/* 
var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '0000',
  database : 'comments'
});

connection.connect();

connection.query('SELECT * from comment', function(err, rows, fields) {
  if (err) throw err;

  console.log('The solution is: ', rows[0].Names);
});

connection.end();
*/

/*
// very simple Web Server
var http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
 
  res.end(JSON.stringify('req'));
}).listen(1337, "127.0.0.1");

console.log('Server running at http://127.0.0.1:1337/');
*/
/*
var express = require('express');
var app = express();

app.use(express.static('public'));

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.get('/addnums', function (req, res) {
	var sum = Number(req.query.num1) + Number(req.query.num1)
  res.send('The result is ' + sum);
});

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
*/

var connection = require('./dbConnection.js');

var express = require('express');
var app = express();

app.use(express.static('public'));

app.get('/comments', function (req, res) {
	var query = 'SELECT * FROM picturecomments.comments';
  try{
        connection.query(query, function(err, rows) {
            if(err)
                res.status(404).json(err);
            res.json(rows);
        });
    }
    catch(e) {
        res.status(404).send(e);
    }
});

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});