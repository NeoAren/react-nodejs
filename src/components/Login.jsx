import React from "react";

import { Link } from "react-router-dom";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.login = this.login.bind(this);
  }

  login() {
    var userName = $("#username").val();
    var password = $("#password").val();
    if (userName == "1" && password == "1") {
      this.props.action();
      console.log("logged in");
    }
  }

  render() {
    // Use Link elements inside router to navigate
    return (
      <div>
        <h3>You are on the /login page</h3>
        <Link to="/">Go to /</Link>
        <br />
        <input type="text" id="username" placeholder="Username" />
        <br />
        <input type="password" id="password" placeholder="Password" />
        <br />
        <button onClick={this.login}>Login</button>
      </div>
    );
  }
}

export default Login;
