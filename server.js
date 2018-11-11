//
// SERVER.JS - This is the main file for our nodejs webserver, most configurations are set here
//

// ------------------------------------- Require dependencies ---------------------------------------- //
const path = require('path');               // Built in package, used to get the path of the project
const express = require('express');         // ExpressJS is a framework for NodeJS, makes our life much easier
const bodyParser = require('body-parser');  // Body-parser is used to parse data sent to the server
const jwt = require('jsonwebtoken');        // JWT-s are used to identify users
// -------------------------------------------------------------------------------------------------- //

// ------- Create an expressjs app --------- //
const app = express();
// ----------------------------------------- //

// --------------------------------- We set up webpack here ------------------------------------ //
var webpackDevMiddleware = require('webpack-dev-middleware');  // Import dev middleware
var webpackHotMiddleware = require('webpack-hot-middleware');  // Import hot reload middleware
var webpack = require('webpack');            // Import webpack
var config = require('./webpack.config');    // Import webpack config file
var compiler = webpack(config);              // Create compiler
app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: config.output.publicPath }));   // Use compiler
app.use(webpackHotMiddleware(compiler));     // Use hot reloading plugin
// -------------------------------------------------------------------------------------------- //

// ------------------------------ Set up middlewares here --------------------------//
app.use(bodyParser.json());                           // Set up body-parser
app.use(bodyParser.urlencoded({ extended: true }));   // ----- "" ------
app.use(express.static(path.join(__dirname, '/')));   // Set default path
// ------------------------------------------------------------------------------- //

// -------------------------- Verify JWT token, set req.user --------------------------------------- //
app.use(function (req, res, next) {
   if (req.headers && req.headers.authorization && req.headers.authorization.split(' ')[0] === 'JWT') {
      jwt.verify(req.headers.authorization.split(' ')[1], salt, function (err, decode) {
         if (err) req.user = undefined;
         req.user = decode; next();       // If the request comes from a valid, logged in user we set the req.user...
      });                                 // ...variable  to the user's data, such as uuid and username
   } else {
      req.user = undefined; next();       // If the user is not valid or is not logged in, req.user is undefined
   }
});
// --------------------------------------------------------------------------------------------------- //

// ------------- Return index.html on any GET request ------------- //
app.get('*', function (req, res) {
   res.sendFile(__dirname + '/public/index.html'); // On GET http requests we return the index.html file
});
// --------------------------------------------------------------- //

// ------------- Listen for POST requests at '/' ------------- //
app.post('/', function (req, res) {
   const controller = require('./src/controllers/home.js'); // Import controller
   controller.handle(req, res); // Give the controller the req and res variables, and let it handle the request
});
// --------------------------------------------------------------- //

// --------- Start server, listen on port 80 --------- //
app.listen(80, () => {
   // You can now start up the server by typing 'npm start' in the console
   // Access it through http://localhost
   console.log(`HTTP server running on port 80...`);
});
// --------------------------------------------------- //