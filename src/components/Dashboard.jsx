import React from "react";

import { Link, Redirect } from "react-router-dom";

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.isLoggedIn === false) {
      return <Redirect to="/login" />;
    }
    return (
      <div>
        <h3>You are on the /dashboard page</h3>
        <Link to="/">Go to /</Link>
        <br />
        <button onClick={this.props.action}>Log out</button>
      </div>
    );
  }
}

export default Dashboard;
