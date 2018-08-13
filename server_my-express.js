const express = require('./libs/my-express');
const logger = require('./libs/my-logger')

let server = express();

server.listen(8080);

console.log('监听成功了');

server.get(logger);

server.get('/', (req, res, next) => {
    console.log('asd');
    next();
});
server.get('/', (req, res, next) => {
    console.log('qqq');
    res.send('qwert');
    res.end();
})