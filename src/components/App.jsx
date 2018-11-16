//
// This is the 'App' component, our whole frontend application is going to be created in here
//

import React from "react"; // Import React

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect
} from "react-router-dom"; // Import routing elements

import Dashboard from "./Dashboard.jsx"; // Import another component
import Login from "./Login.jsx";

/*
   A react component is basically a class, that extends React's Component class. This Component class
   provides our component with all the goodnesses of react
*/

// Create a component named 'App'
class App extends React.Component {
  // When the 'App' component is created, the constructor is going to be called first.
  constructor(props) {
    super(props); // Get props, more on those below
    this.state = { text: "Hello world!", loggedIn: false }; // Set the state
    this.handler = this.handler.bind(this);
  }

  handler() {
    this.setState({
      loggedIn: true
    });
    console.log("handler used");
  }

  /*
      Props: When a component is called, it can get props the way html elements get attributes, <App prop1="Hello" prop2="world" />
             When props change in the component that called App, App is going to re-render
      State: State stores the data of the component itself, it can only be accessed and modified by the component.
             Setting it outside of the constructor happens with: this.setState({ text: 'text' }); This is ASYNC!
             Changing the state will cause the component to re-render.
   */

  // This is where we are going to render the component
  // Render runs instantly after the constructor is called
  render() {
    // We can run javascript functions and logics as well
    const text = <h1>{this.state.text}</h1>;

    if (this.state.loggedIn == true) {
      return (
        <Router>
          <Redirect to="/dashboard" />
        </Router>
      );
    }

    return (
      <div>
        {text}
        <Router>
          <Switch>
            <Route
              exact
              path="/login"
              render={() => <Login action={this.handler} />}
            />
            <Route
              exact
              path="/dashboard"
              render={() => <Dashboard action={this.handler} />}
            />
            <Route
              path="/"
              render={() => (
                <div>
                  <Link to="/login">Login</Link>
                  <br />
                  <Link to="/dashboard">Dashboard</Link>
                </div>
              )}
            />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App; // Export the app component, so react.js can import it
