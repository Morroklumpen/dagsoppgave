const Post = require ('../models/postmodel')

// Render the main page
const getPosts = async (req, res) => {
    console.log('posts')
    try {
      const posts = await Post.find().sort({ createdAt: 'desc' });
      res.json(posts);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };
  
// Handle form submission for new posts
const newpost = async (req, res) => {
    console.log('posts')
    const { title, content } = req.body;
    console.log('title', title, 'post', content)
    const newPost = new Post({
      title,
      content
    });
    try {
      await newPost.save();
      res.sendStatus(201); // Created
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Internal Server Error' });
    }
}

module.exports = {
    newpost,
    getPosts
}