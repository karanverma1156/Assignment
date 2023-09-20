import React from "react";
import "./login.css";

const Login = () => {
  return (
    <div className="main-content">
      <div className="content">
        <h1>Sign Up</h1>
        <form>
          <label for="username">Username</label>
          <input type="text" id="username" placeholder="Enter Name"></input>

          <label for="email">Email Address</label>
          <input type="email" id="email" placeholder="Enter email"></input>

          <label for="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Enter Password"
          ></input>

          <button className="butn">Sign Up</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
