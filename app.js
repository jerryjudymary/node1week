const express = require('express');
const cors = require("cors");
const app = express();
const port = 3000;
app.use(cors());

const connect = require('./schemas');
connect();

app.get("/", (req, res) => {
    res.sendFile(__dirname + '/index.html');
  });
  
app.get("/detail.html", (req, res) => {
    res.sendFile(__dirname + '/detail.html');
});

const boardRouter = require('./routers/boardRouter');
const Posts = require('./schemas/posts');

app.listen(port, () => {
    console.log(port, '포트로 서버가 열렸어요!');
  });

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use('/', boardRouter);
app.use('/board', boardRouter);
app.use(express.static('public'));