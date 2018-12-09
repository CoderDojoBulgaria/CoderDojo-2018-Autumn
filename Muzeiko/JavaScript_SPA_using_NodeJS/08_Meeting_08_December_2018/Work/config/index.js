var express = require('express');
var config = require('./configuration');
var routes = require('./routes');

module.exports = {
    configApp: function() {        
        var app = express();
        app = config.appConfig(app);
        app = routes.configureRoutes(app);
        return app;
    }
}
