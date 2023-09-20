import React from "react";
import "./login.css";

const Login = () => {
  return (
    <div className="main-content">
      <div className="content">
        <h1>Log in!</h1>
        <form>
          <label for="email">Email Address</label>
          <input type="text" id="email" placeholder="Enter Email"></input>

          <label for="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Enter Password"
          ></input>

          <p className="fp">Forgot Password?</p>

          <button className="butn">Log in</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
