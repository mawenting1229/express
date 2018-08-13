const express = require('express');
const bodyParser  = require('body-parser');
const querystring = require('querystring');

let server = express();

server.listen(8080);

//server.use(bodyParser.urlencoded({extended:false}))//假如我就是不想用bodyParser这个中间件，我就想自己写一个，那么来吧：
server.use((req, res, next) => {
    let str = '';
    req.on('data', data => {
        str+=data;
    });
    req.on('end', () => {
        console.log(str);
        req.body = querystring.parse(str);
        next();
    })
})

server.post('/', (req, res) => {
    console.log(req.body);
})