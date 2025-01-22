import React, { useState } from "react";
import "../componentsCss/Login.css";
import linkedinImg from "../assets/Linkedin-img.png";
import { auth } from "../firebase";

function Login() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const logInToApp = (e) => {
    e.preventDefault();
  };
  const register = () => {};

  return (
    <div className="login">
      <img src={linkedinImg} alt="" />
      <form>
        <input
          type="text"
          placeholder="Full name (required if regestering)"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input type="text" placeholder="Profile pic URl (optional)" />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" onClick={logInToApp}>
          Sign in
        </button>
      </form>
      <p>
        Not a member?{" "}
        <span className="login-register" onClick={register}>
          Register Now
        </span>
      </p>
    </div>
  );
}

export default Login;
