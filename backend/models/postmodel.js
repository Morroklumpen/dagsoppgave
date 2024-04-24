const mongoose = require('mongoose');



// Define a schema for your posts
const postSchema = new mongoose.Schema({
    title: String,
    content: String,
    createdAt: { type: Date, default: Date.now }
  });
  
  // Create a model based on the schema
  const Post = mongoose.model('Post', postSchema);

  module.exports = Post;