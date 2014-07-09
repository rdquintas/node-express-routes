// Load the route handlers
var routes = require('./handlers');
var user = require('./handlers/users');

module.exports = function(app) {
    // Define the routes
    app.get('/', routes.index);
    app.get('/users', user.list);
};
