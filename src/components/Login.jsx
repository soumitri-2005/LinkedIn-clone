import React, { useState } from "react";
import "../componentsCss/Login.css";
import linkedinImg from "../assets/Linkedin-img.png";
import { auth } from "../firebase";
// Dispatch(send) allows you to send actions to the store, which then updates the state based on the action type and payload. So basicaly . This hook is used to dispatch actions to the Redux store.
import { useDispatch } from "react-redux";
import { login } from "../features/userSlice";

function Login() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [profilePic, setProfilePic] = useState("");
  const dispatch = useDispatch();

  const logInToApp = (e) => {
    // to prevent the default submission of form
    e.preventDefault();

    auth
      // These lines use the auth object to sign in a user with the provided email and password. If the sign-in is successful, the then block is executed with userAuth as the result.
      .signInWithEmailAndPassword(email, password)
      .then((userAuth) => {
        dispatch(
          login({
            // These lines dispatch the login action to the Redux store with the user's email, UID, display name, and profile URL as the payload.
            // In the context of this code, "payload" refers to the data that is sent along with an action to the Redux store. When you dispatch an action, you often include some data that the reducer will use to update the state. This data is called the payload.
            email: userAuth.user.email,
            uid: userAuth.user.uid,
            displayName: userAuth.user.displayName,
            profileUrl: userAuth.user.photoURL,
          })
        );
      })
      .catch((error) => alert(error));
  };
  const register = () => {
    if (!name) {
      return alert("Please enter a full name!");
    }

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((userAuth) => {
        userAuth.user
          .updateProfile({
            displayName: name,
            photoURL: profilePic,
          })
          .then(() => {
            dispatch(
              login({
                email: userAuth.user.email,
                uid: userAuth.user.uid,
                displayName: name,
                photoUrl: profilePic,
              })
            );
          });
      })
      .catch((error) => alert(error));
  };

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
        <input
          type="text"
          placeholder="Profile pic URl (optional)"
          value={profilePic}
          onChange={(e) => setProfilePic(e.target.value)}
        />
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
          onChange={(e) => setPassword(e.targset.value)}
        />
        <button type="submit" onClick={logInToApp}>
          Sign in
        </button>
      </form>
      <p>
        {/* '{" "}' this is for a white space */}
        Not a member?{" "}
        <span className="login-register" onClick={register}>
          Register Now
        </span>
      </p>
    </div>
  );
}

export default Login;
