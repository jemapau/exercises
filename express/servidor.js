var express = require('express');
var app = express()

app.get('/', function (req, res){
  res.send('Hello World')
})

app.get('/page', function (req, curso){
  curso.send('A Page')
})

app.listen(3000)
