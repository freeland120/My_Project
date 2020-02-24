const memberRouter = require("./routes/memberRouter");
const express = require("express");
const server = express();
const cors = require("cors");
server.use("/member", memberRouter);

const corsOptions = {
  origin: true,
  credentials: true
};

server.use(cors(corsOptions));
server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.listen(8080, () => {
  console.log("8080 Server ready...");
});
