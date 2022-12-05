import express from "express";
import morgan from "morgan";
import rootRouter from "./routers/rootRouters";
import userRouter from "./routers/userRouters";
import videoRouter from "./routers/videoRouters";
import session from "express-session";
import { localsMiddleware } from "./middlewares.js";

const app = express();

const logger = morgan("dev");

app.set("views", process.cwd() + "/src/views");
app.set("view engine", "pug");
app.use(logger);
app.use(express.urlencoded({ extended: true }));
app.use(session({ secret: "Hello!", resave: true, saveUninitialized: true }));
app.use(localsMiddleware);
app.use("/", rootRouter);
app.use("/videos", videoRouter);
app.use("/users", userRouter);

export default app;
