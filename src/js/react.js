//
// This is the entry point of our react structure, this is where the webpack build starts
//

import React from 'react';          // Import React
import ReactDOM from 'react-dom';   // Import ReactDOM

import App from '../components/App.jsx';  // Import 'App' component from the components folder

ReactDOM.render(<App />, document.querySelector('#root')); // Render the 'App' component into the 'root' div on the webpage