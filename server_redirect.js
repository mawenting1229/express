const express = require('express');

let server = express();

server.get('/baidu', (req, res, next) => {
    res.redirect('http://baidu.com');
})

server.listen(8080);