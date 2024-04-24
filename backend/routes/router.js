const { Router } = require("express");
const router =Router()
const {getPosts, newpost} = require ('../controllers/controller')

// Render the main page
router.get('/posts', getPosts);
  
// Handle form submission for new posts
router.post('/post', newpost)

  module.exports = router;