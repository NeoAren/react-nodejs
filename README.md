# React-NodeJS Example Project

An example project showcasing the use of react and nodejs in action.

## Technologies used

React             - React is a frontend javascript library, which uses JSX syntax to combine javascript functions with html

NodeJS            - NodeJS is used to create our webserver, listen and respond to http requests

NPM               - NPM is a package manager for NodeJS, we can easily install and manage third party libraries with it

Babel             - Babel is an algorithm, that compiles react's JSX structure into pure ES5 JavaScript, that can be understood by browsers

Webpack           - Webpack uses babel to compile react, and combine all the js files into a single bundle.js

## Project structure

node_modules      - All the packages installed through NPM can be found here, we do not really have to worry about anything going on in there
public            - Publicly available files, such as index.html, or favicon.ico
   index.html     - The base of our website
src               - Source files for our project, most of the real magic happens here
   components     - All of of our react components come here
      App.jsx     - This is our main react component
   controllers    - NodeJS controllers, handling actions such as login, registration or account management
      home.js     - This is the controller for our home page backend
   css            - CSS, design files
      style.css   - This contains the styles for our application
   js             - Here comes the entry point for our react structure, and the bundle.js compiled by webpack
      react.js    - This is the entry point of our react structure, this is where the webpack build starts
      bundle.js   - This contains the webpack-compiled javascript bundle
.babelrc          - This contains our babel configuration, it defines which babel presets to use. Preset-env is the preset for es5 javascript, preset-react is for react
.gitignore        - This contains files / folders, that we do not want to push to the repository, in this case it is node_modules/
package-lock.json - Contains all the data about our packages and dependencies
package.json      - Contains data about our project and the installed packages, their versions etc.
README.md         - You are reading this right now, this file is displayed on github, when somebody opens your repository
server.js         - This is the main file for our nodejs webserver, running this starts up the application
webpack.config.js - This is where we configure webpack to compile react into es5 js

Most of these files are going to contain comments explaining how these things work in more depth.

## Run the application

In your terminal navigate to the project's folder, or use your editor's built-in terminal and type:
```npm start``` to start the application
Access the project in your browser at
```http://localhost```
To completely re-build the bundle.js file
```npm run build```