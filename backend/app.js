const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const bcrypt = require('bcrypt');

 
const app = express();
app.use(bodyParser.json());
app.use(cors());
 
// MongoDB connection URI
const uri = 'mongodb://10.12.14.42:27017/?directConnection=true&appName=mongosh+2.2.0';
 
// Connect to MongoDB
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
 
// Create a connection instance
const db = mongoose.connection;
 
// Event handlers for successful and failed connections
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Server connected to MongoDB');
});
 
 
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));




  