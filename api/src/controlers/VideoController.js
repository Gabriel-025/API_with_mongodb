const  {response} = require("express")
const Video = require("../models/Video");
const { v4 : uuid }= require("uuid");


module.exports = {
  async  index(request, response) {
       try {
         const videos = await Video.find();
         return response.status(200).json({ videos });
      }
       catch (err) {
         response.status(500).json({ error: err.message });
     }
    },
    async store(request, response) {
        const { title, link } = request.body;
        
        console.log(request.body);

         if (!title || !link){
            return response.status(400).json({ error: "Missing title or link." });
        }

        const video = new Video({
            _id:uuid(),
            title,
            link,
            liked: false,
        })
        try {
            await video.save();
            return response.status(201).json({ message: "Video added succesfully!" });
        }
        catch (err) {
            response.status(400).json({ error: err.message });
        }
    },

     async update(req,res) {
    const { title, link } = req.body;

    if (!title && !link) {
      return res
        .status(400)
        .json({ error: "You must inform a new title or a new link" });
    }

    if(title) res.video.title = title;
    if(link) res.video.link = link;

    try {
      await res.video.save()
      return res.status(200).json({ message: "Video updated succesfully!" });
    } catch (err) {
      res.status(500).json({ error: err.message })
    }
  },

  async delete(req, res) {
    try {
      await res.video.remove();
      return res.status(200).json({ message: "Video removed succesfully!" });
    } catch (err) {
      return res.status(500).json({ error: err.message });
    }
  },

  async updateLike(req, res) {
    res.video.liked = !res.video.liked;

    try {
      await res.video.save()
      
      return res.status(200).json({
        message: `Video ${
          res.video.liked ? "liked" : "unliked"
        } sucessfully!`,
      });
    } catch (err) {
       res.status(400).json({ error: err.message })
    }

    

  },
}