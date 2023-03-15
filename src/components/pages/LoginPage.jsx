import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

import { useState } from "react";
import { Link } from "react-router-dom";

import Logo from "../../assets/logo.svg";

import classes from "../pages/LoginPage.module.css";

const LoginPage = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const auth = getAuth();

  const handleLogin = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log("Signed in user:", user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log("An error occured:", errorCode, errorMessage);
      });
  };

  return (
    <section>
      <Link className={classes["card-logo"]} to="/">
        <img src={Logo} alt="logo" />
      </Link>
      <div className={classes["card-wrapper"]}>
        <div className={classes.card}>
          <header>
            <h1>Login</h1>
          </header>
          <form onSubmit={handleLogin}>
            <input
              placeholder="Email address"
              onChange={(e) => setEmail(e.target.value)}
              type="email"
            />
            <input
              onChange={(e) => setPassword(e.target.value)}
              type="password"
            />
            <button type="submit">Log In</button>
          </form>
          <footer>
            <p>Don't have an account</p>
            <Link to="/signup">Sign Up</Link>
          </footer>
        </div>
      </div>
    </section>
  );
};

export default LoginPage;
