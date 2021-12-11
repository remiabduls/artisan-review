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

          <div className="form-group">
            <div className="custom-control custom-checkbox">
              <input
                type="checkbox"
                className="custom-control-input"
                id="customCheck1"
              />
              <label className="custom-control-label" htmlFor="customCheck1">
                Remember me
              </label>
            </div>
          </div>

          <button type="submit" className="login__signInButton">
            Sign In
          </button>
        </form>

        <p>
          <strong>
            By signing-in you agree to the ARTISAN REVIEW Conditions of Use &
            Sale. Please see our Privacy Notice, our Cookies Notice and our
            Interest-Based Ads Notice.
          </strong>
        </p>

        <button className="login__registerButton">Create your Account</button>
        <p className="forgot-password">
          Forgot <a href="#">password?</a>
        </p>
      </div>
    </div>
  );
}

export default Login;
