const { validate: isUuid } = require("uuid");
const Post = require("../models/Post");

module.exports = {
  async getPost(req, res, next) {
    const { id } = req.params;

    if (!isUuid(id)) {
      return res.status(400).json({ error: "Invalid ID" });
    }

    try {
      const post = await Post.findById(id);
      res.post = post;
      if (!post) {
        return res.status(404).json({ error: "Post not found" });
      }
    } catch (err) {
      return res.status(500).json({ error: err.message });
    }

    next();
  },
};
