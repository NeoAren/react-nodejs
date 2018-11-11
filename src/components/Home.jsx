import React from 'react';

import { BrowserRouter as Router, Route, Switch, Link, Redirect } from 'react-router-dom'; // Import routing elements

import Subpage from './Subpage.jsx';

class Home extends React.Component {

   constructor(props) {
      super(props);
      this.state = this.props.state;
      this.myFunction = this.myFunction.bind(this); // Bind 'this' to the function
   }

   // Create functions
   myFunction() {
      console.log('this is a function');
   }

   /*
      Routing: in react you can navigate between pages (or more like components) using routing, without reloading the page
      We initiate the router, then use a switch component. It is necessary, so react will choose only one route.
      We define which components we want to render on which route.
   */
   
   render() {
      this.myFunction();
      // Check out how the links navigate without reloading. Try to enter localhost/redirect, see what happens
      return (
         <Router>
            <Switch>
               <Route exact path="/home" render={() => <Subpage />} />
               <Route exact path="/redirect" render={() => <Redirect to="home" />} />
               <Route path="/" render={() => <Link to="/home">Go to /home</Link>} />
            </Switch>
         </Router>
      );
   }

}

export default Home;