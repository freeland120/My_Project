import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import { localsMiddleware } from "./middlewares";
import globalRouter from "./routers/globalRouter";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";

import routes from "./routes"; // get이나 post 요청 할때 url을 한꺼번에 모아놓은 파일

const app = express();

/* function serverHome(req, res) {
  res.send("This is a HOME");
}

function serverProfile(req, res) {
  res.send("This is a Profile");
}

function serverMiddleware(req, res, next) {
  console.log("I'm Middleware");
  next();
} */

//위에서부터 아래로 쭉 읽는다
app.use(helmet());
app.set("view engine", "pug");
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("dev"));

app.use(localsMiddleware);

//app.use(serverMiddleware);

app.use(routes.home, globalRouter);
app.use(routes.users, userRouter);
app.use(routes.videos, videoRouter);

export default app;
