//cookie session
const express  = require('express');
const cookieParser = require('cookie-parser');

var server = express();

server.use('/aaa/a.html', function(req, res) {

    res.cookie('user', 'mwt', {path: '/aaa', maxAge: 30*24*3600*1000});
    console.log(req.cookies);
    res.send('ok');
});

server.listen(8080);