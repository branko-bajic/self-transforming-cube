const express = require('express');
const fs = require('fs');
const server = express();
var THREE = require('three');
server.use(express.static('./'));
server.set('view engine', 'ejs');

server.get('/', (req, res) => {
  res.render('index.ejs');
});

server.listen(3000, () => console.log('> server listening on port 3000...'));
