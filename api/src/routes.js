const express = require("express");
const routes = express.Router();

const VideoController = require("./controllers/VideoController");
const VideoMiddleware = require("./middlewares/VideoMiddleware");


routes.get("/videos", VideoController.index);

routes.post("/videos", VideoController.store);

routes.put("/videos/:id", VideoMiddleware.getVideo, VideoController.update);

routes.delete("/videos/:id", VideoMiddleware.getVideo, VideoController.delete);


const PostController = require("./controllers/PostController");
const PostMiddleware = require("./middlewares/PostMiddleware");

routes.get("/posts", PostController.index);
routes.post("/posts", PostController.store);
routes.put("/posts/:id",  PostMiddleware.getPost, PostController.update);
routes.delete("/posts/:id",  PostMiddleware.getPost, PostController.delete);



routes.patch(
  "/videos/:id",
  VideoMiddleware.getVideo,
  VideoController.updateLike
);


module.exports = routes; 
