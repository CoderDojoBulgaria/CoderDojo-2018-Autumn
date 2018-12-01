var config = require('./config');
var settings = require('./settings');
var app = config
    .configApp()
    .listen(settings.port, function () {
        console.log(`Server started at http://127.0.0.1:${settings.port}`);
    });