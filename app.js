var http = require('http');
var express = require('express');
var app = express();



// Add router middleware explicitly
app.use(app.router);
app.use(require('errorhandler')());

// Pass the Express instance to the routes module
var routes = require('./routes')(app);

http.createServer(app).listen(3000, function() {
    console.log('App started');
});
