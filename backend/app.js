// server.js (backend)
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const router = require('./routes/router')

const app = express();

const DBuri = "mongodb+srv://testuser:Passord1@mongopongo.hkxltqo.mongodb.net/tordrustand?retryWrites=true&w=majority&appName=mongopongo"/
mongoose.connect(DBuri);


// Configure CORS to allow requests from frontend server
app.use(cors({
  origin: 'https://localhost:8080', // Replace with your frontend server URL
  optionsSuccessStatus: 200 // Some legacy browsers (IE11, various SmartTVs) choke on 204
}));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use (router);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
  
  // Connect to MongoDB
  mongoose.connect(DBuri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(result => {
    console.log('Connected to Mongo')
  })
  .catch(err => console.log(err))

});


