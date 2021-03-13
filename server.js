const dotenv = require('dotenv');
dotenv.config();
const http = require('http');
const express = require('express');
const path = require('path');

function getTokenImg(tokenid) {
    return `tokenid.png`;
}

const app = express();

app.get('/original/:tokenid.png', (req, res) => res.sendFile(path.join(`${__dirname}/original/${getTokenImg(req.params.tokenid)}`)));
app.get('/128/:tokenid.png', (req, res) => res.sendFile(path.join(`${__dirname}/128/${getTokenImg(req.params.tokenid)}`)));
app.get('/64/:tokenid.png', (req, res) => res.sendFile(path.join(`${__dirname}/64/${getTokenImg(req.params.tokenid)}`)));
app.get('/32/:tokenid.png', (req, res) => res.sendFile(path.join(`${__dirname}/32/${getTokenImg(req.params.tokenid)}`)));

const server = http.createServer(app);
server.listen(process.env.PORT, () => {
    console.log('Server listening on port ' + process.env.PORT + '!');
});
