const express = require('express');

let server = express();
server.listen(8080);

//接口
server.get('/', (req, res) => {
    console.log('我是GET');
});
server.post('/', (req, res) => {
    console.log('我是POST');
});

//静态文件
server.use(express.static('./www'));