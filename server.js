const express = require('express');
const fs = require('fs');

const server = express();
server.use(express.static('./'));
server.set('view engine', 'ejs');

server.get('/', (req, res) => {
  res.render('index.ejs');
});

server.listen(1234, () => console.log('> server listening on port 1234...'));
