import React, { useState } from "react";
import "./Form.css";
import logo from "./assets/logo.png";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="login">
      <div to="/">
        <img className="login__logo" src={logo} alt="business" />
      </div>

      <div className="login__container">
        <h1>Sign-in</h1>

        <form>
          <h5>E-mail</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit" className="login__signInButton">
            Sign In
          </button>
        </form>

        <p>
          <strong>By signing-in you agree to the ARTISAN REVIEW Conditions of Use &
          Sale. Please see our Privacy Notice, our Cookies Notice and our
          Interest-Based Ads Notice.</strong>
        </p>

        <button className="login__registerButton">Create your Account</button>
      </div>
    </div>
  );
}

export default Login;
