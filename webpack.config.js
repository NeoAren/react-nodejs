var webpack = require('webpack');         // Import webpack
var path = require('path');               // Import the built-in path package

/*
   This is the config file for webpack.
   The settings are going to be exported here, and imported and used in server.js
*/

module.exports = {
   mode: 'development',                   // We can create multiple config files for different build modes, such as development, production etc.
   entry: './src/js/react.js',            // This is the entry point for our react structure, more in the react.js file
   output: {
      path: path.join(__dirname, '/'),
      filename: 'src/js/bundle.js',      // This is where webpack is going to build the compiled and compressed bundle.js
      publicPath: '/'
   },
   module: {        // We can use modules for our build, such es babel to compile react into es5 javascript, there are moules for scss to css too
        rules: [
            {
               test: /\.(js?|jsx)$/,      // These are the file extensions that we want to compile
               exclude: /node_modules/,   // We do not want to compile anything from node_modules
               use: 'babel-loader'        // We are using the babel_loader module here
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()   // With this plugin we can re-build the bundle.js every time a .js or .jsx file is saved (hot reloading)
    ]
};
