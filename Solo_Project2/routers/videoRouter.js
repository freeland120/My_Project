import express from "express";
import routes from "../routes";
import {
  videosController,
  videoDetailController,
  uploadController,
  editVideoController,
  deleteVideoController
} from "../controllers/videoController";
const videoRouter = express.Router();

videoRouter.get(routes.videos, videosController);

videoRouter.get(routes.videoDetail, videoDetailController);

videoRouter.get(routes.upload, uploadController);

videoRouter.get(routes.editVideo, editVideoController);

videoRouter.get(routes.deleteVideo, deleteVideoController);

export default videoRouter;
