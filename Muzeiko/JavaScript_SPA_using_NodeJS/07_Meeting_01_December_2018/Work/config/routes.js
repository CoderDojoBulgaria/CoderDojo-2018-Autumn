var homeController = require('../controllers/homeController');

module.exports = {
    configureRoutes: function (app) {
        app.get('/', homeController.homeIndex);
        return app;
    }
}