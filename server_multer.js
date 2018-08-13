const express = require('express');
const path = require('path');
const fs = require('fs');
//const multer = require('multer');

let server = express();

//server.use(multer);

// let multerObj = multer({dest:'./upload'});

// server.use(multerObj.any());

server.post('/upload', (req, res, next) => {
    console.log(req.files);

    _next();

    let i = 0;

    function _next() {
        let newname = req.files[i].path+path.extname(req.files[i].originalname);

        fs.rename(req.files[i].path, newname, err=> {
            if(err) {
                res.sendStatus(500, 'rename error');
                res.end();
            }else{
                i++;
                if(i >= res.files.length) {
                    res.send('upload ok');
                    res.end();
                }else{
                    _next();
                }

            }
        })
    }
})

server.listen(8080);