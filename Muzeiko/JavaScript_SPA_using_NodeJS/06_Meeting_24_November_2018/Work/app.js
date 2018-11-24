var express = require('express');
var homeController = require('./controllers/homeController');
var app = express();
app.use(express.static(__dirname + '/views'));
app.use(express.static(__dirname + '/public'));
app.get('/', homeController.homeIndex);
app.listen(8081, function () {
    console.log('Server started at http://127.0.0.1:8081');
});