var express = require('express');
var app = express();
app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/public'));

// index page 
app.get('/', function(req, res) {
    res.render('pages/index');
});

app.listen(8080);