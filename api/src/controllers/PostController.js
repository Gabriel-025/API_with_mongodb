// const { response } = require("express");
// const Post = require("../models/Post");
// const { v4: uuid } = require("uuid");

// module.exports = {
//   async index(req, res) {
//     try {
//       const posts = await Post.find();
//       return res.status(200).json({ posts });
//     } catch (err) {
//       res.status(500).json({ error: err.message });
//     }
//   },
//   async store(req, res) {
//     const { title, text } = req.body;

//     if (!title || !text) {
//       return res.status(400).json({ error: "Missing title or text." });
//     }

//     const post = new Post({
//       _id: uuid(),
//       title,
//       text,
      
//     });

//     try {
//       await post.save();
//           console.log(post)
//       return res.status(201).json({ message: "Post added succesfully!" });
//     } catch (err) {
//       res.status(400).json({ error: err.message });
//     }
//   },
//   async update(req, res) {
//     const { title, text } = req.body;

//     if (!title && !text) {
//       return res
//         .status(400)
//         .json({ error: "You must inform a new title or a new link" });
//     }

//     if(title) res.video.title = title;
//     if(text) res.video.text = text;

//     try {
//       await res.text.save()
//       return res.status(200).json({ message: "post updated succesfully!" });
//     } catch (err) {
//       res.status(500).json({ error: err.message })
//     }
//   },

//     async delete(req, res) {
//     try {
//       await res.post.remove();
//       return res.status(200).json({ message: "post removed succesfully!" });
//     } catch (err) {
//       return res.status(500).json({ error: err.message });
//     }
//   },


    
// };


const { response } = require("express");
const { v4: uuid } = require("uuid");
const Post = require("../models/Post");

module.exports = {
  async index(req, res) {
    try {
      const posts = await Post.find();
      return res.status(200).json({ posts });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },

  async store(req, res) {
    const { title, text } = req.body;

    if (!title || !text) {
      return res.status(400).json({ error: "Missing title or text." });
    }
    const post = new Post({
      _id: uuid(),
      title,
      text,
    });

    try {
      await post.save();

      return res.status(201).json({ message: "post added succesfully!" });
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  },

async update(req, res) {
    const { title, text } = req.body;

    if (!title && !text) {
      return res
        .status(400)
        .json({ error: "You must inform a new title or a new text" });
    }

    if(title) res.post.title = title;
    if(text) res.post.text = text;

    try {
      await res.post.save()
      return res.status(200).json({ message: "Post updated succesfully!" });
    } catch (err) {
      res.status(500).json({ error: err.message })
    }
  },

  async delete(req, res) {
    try {
      await res.post.remove();
      return res.status(200).json({ message: "post removed succesfully!" });
    } catch (err) {
      return res.status(500).json({ error: err.message });
    }
  },

};