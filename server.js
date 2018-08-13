const express = require('express');

var server = express();



server.use('/a.html', function(req, res) {
    res.send('aa');
    res.end();
});

server.get('', function() {
    console.log('有get');
})

server.listen(8080);

server.post('', function() {
    console.log('有post');
});