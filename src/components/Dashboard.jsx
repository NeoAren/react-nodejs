import React from "react";

import { Link } from "react-router-dom";

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    // Use Link elements inside router to navigate
    return (
      <div>
        <h3>You are on the /dashboard page</h3>
        <Link to="/">Go to /</Link>
      </div>
    );
  }
}

export default Dashboard;
