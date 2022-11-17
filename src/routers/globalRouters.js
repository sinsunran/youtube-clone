import express from "express";
import { trending, search } from "../controllers/videoController";
import { join, login } from "../controllers/userController";

const globalRouter = express.Router();

globalRouter.get("/", trending);
globalRouter.all("/join", join);
globalRouter.all("/login", login);
globalRouter.all("/search", search);



export default globalRouter;