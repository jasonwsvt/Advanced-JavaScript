const express = require("express");

const checkAuth = require("../middleware/check-auth");
const extractFile = require("../middleware/file");
const PostController = require("../controllers/posts")

const router = express.Router();

router.get("", PostController.getPosts);

router.post("", checkAuth, extractFile, PostController.createPost);

router.get("/:id", PostController.getPostById);

router.put("/:id", checkAuth, extractFile, PostController.updatePostById);

router.delete("/:id", checkAuth, PostController.deletePostById);

module.exports = router;
