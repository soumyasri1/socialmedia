const express = require("express");
const router = express.Router();
const User = require("../models/user.js");
const Post = require("../models/post");
// Create a route for user registration

router.post("/register", async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const user = new User({ username, email, password });
    await user.save();
    res.status(200).json({ message: "User registration successful" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
});
router.post("/signin", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(401).json({ message: "Invalid email or password" });
    }
    if (password !== user.password) {
      return res.status(401).json({ message: "Invalid email or password" });
    }
    res.status(200).json({ message: "User login successful" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
});

// Create a new post associated with a user
router.post("/post", async (req, res) => {
  try {
    const { text } = req.body;
    const post = new Post({ text });
    await post.save();
    res.status(201).json(post);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
});

router.get("/posts", async (req, res) => {
  try {
    const posts = await Post.find();
    res.status(200).json(posts);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
});

router.delete("/post/:id", async (req, res) => {
  try {
    const postId = req.params.id;
    await Post.findByIdAndRemove(postId);
    res.status(204).end(); // Return a success status with no content
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
});

module.exports = router;
