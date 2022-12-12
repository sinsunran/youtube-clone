import express from "express";
import {
  watch,
  getEdit,
  postEdit,
  remove,
  getUpload,
  postUpload,
} from "../controllers/videoController";
import { protectorMiddleware, uploadVideoMiddleware } from "../middlewares";

const videoRouter = express.Router();

videoRouter.get("/:id([0-9a-f]{24})", watch);
videoRouter
  .route("/:id([0-9a-f]{24})/edit")
  .all(protectorMiddleware)
  .get(getEdit)
  .post(postEdit);
videoRouter
  .route("/:id([0-9a-f]{24})/remove")
  .all(protectorMiddleware)
  .get(remove);
videoRouter
  .route("/upload")
  .all(protectorMiddleware)
  .get(getUpload)
  .post(uploadVideoMiddleware.single("video"), postUpload);

videoRouter.get("/:id(\\d+)/remove", protectorMiddleware, remove);

export default videoRouter;
