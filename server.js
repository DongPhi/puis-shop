var express = require('express');
var app = express();
app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/public'));

// index page 
app.get('/', function(req, res) {
    res.render('pages/index');
});

app.get('/admin', function(req, res) {
    res.render('pages/admin');
});

app.listen(8080);