const express = require('express');
const path = require('path');

let server = express();

server.get('/1.txt', (req, res, next) => {
    if(req.query['pass'] == '123456') {
        //path.resolve('./static/1.txt')作用是将相对路径转为绝对路径，因为res.sendFile()的参数需要是个绝对路径，不然就报错了，可以试试。
        res.sendFile(path.resolve('./static/1.txt'));
        res.end();
    }else{
        res.sendStatus(403);
        res.end();
    }

})

server.listen(8080);