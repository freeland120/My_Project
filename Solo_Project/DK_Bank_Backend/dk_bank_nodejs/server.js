const mongodb = require("./database/db");
const memberRouter = require("./routes/memberRouter");
const express = require("express");
const server = express();
const cors = require("cors");

const connect = require("./database/db"); //DB파일 불러오기
connect(); //DB연결

const PORT = 8080;

const corsOptions = {
  origin: true,
  credentials: true
};

server.use(cors(corsOptions));
server.use(express.json());
server.use(express.urlencoded({ extended: true }));

server.use("/member", memberRouter);

serverListening = () => {
  console.log(`Server ready: http://localhost:${PORT}`);
};

server.listen(PORT, serverListening);
