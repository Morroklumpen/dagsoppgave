let express = require('express');
let app = express();

// set the view engine to ejs
app.set('view engine', 'ejs');

// use res.render to load up an ejs view file

// index page
app.get('/', function(req, res) {
  let mascots = [
    { name: 'Sammy', organization: "DigitalOcean", birth_year: 2012},
    { name: 'Tux', organization: "Linux", birth_year: 1996},
    { name: 'Moby Dock', organization: "Docker", birth_year: 2013}
  ];
  let tagline = "No programming concept is complete without a cute animal mascot.";

  res.render('pages/index', {
    mascots: mascots,
    tagline: tagline
  });
});

// bitter page
app.get('/bitter', function(req, res) {
  res.render('pages/bitter');
});

// login page
app.get('/login', function(req, res) {
  res.render('pages/login');
});


app.listen(8080);
console.log('Server is listening on port 8080');