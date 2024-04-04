var express = require('express');
const { default: mongoose } = require('mongoose');
var app = express();

mongoose.connect("mongodb://10.12.14.42:27017/?directConnection=true&appName=mongosh+2.2.0")
app.listen(3000);
console.log('Server is listening on port 3000');

app.get('/', function(req, res) {
res.json({"username": "arne"} );

});




  