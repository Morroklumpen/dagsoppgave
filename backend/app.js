

// server.js (backend)
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();



// Define a schema for your posts
const postSchema = new mongoose.Schema({
  title: String,
  content: String,
  createdAt: { type: Date, default: Date.now }
});

// Create a model based on the schema
const Post = mongoose.model('Post', postSchema);

// Configure CORS to allow requests from frontend server
app.use(cors({
  origin: 'https://localhost:8080', // Replace with your frontend server URL
  optionsSuccessStatus: 200 // Some legacy browsers (IE11, various SmartTVs) choke on 204
}));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Render the main page
app.get('/posts', async (req, res) => {
  console.log('posts')
  try {
    const posts = await Post.find().sort({ createdAt: 'desc' });
    res.json(posts);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Handle form submission for new posts
app.post('/post', async (req, res) => {
  console.log("/post");
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
});



const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
  
  // Connect to MongoDB
  mongoose.connect('mongodb://10.12.14.42:27017/my_database', {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(result => {
    console.log('Connected to Mongo')
  })
  .catch(err => console.log(err))

});


