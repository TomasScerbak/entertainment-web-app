import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

import { useState } from "react";
import { Link } from "react-router-dom";

import Button from "../UI/Button";

import Logo from "../../assets/logo.svg";

import classes from "../pages/LoginPage.module.css";
import styles from "../UI/Button.module.css";

const LoginPage = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const auth = getAuth();

  const handleLogin = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        if (user.refreshToken) {
          window.location = "/";
        }
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
            <div className={classes["form-control"]}>
              <input
                placeholder="Email address"
                onChange={(e) => setEmail(e.target.value)}
                type="email"
              />
              {email === "" ? (
                <p className={classes.error}>Can't be empty</p>
              ) : (
                ""
              )}
            </div>
            <div className={classes["form-control"]}>
              <input
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
                type="password"
              />
              {password === "" ? (
                <p className={classes.error}>Can't be empty</p>
              ) : (
                ""
              )}
            </div>
            <Button
              type="submit"
              className={`${styles.btn} ${styles["btn--primary"]}`}
            >
              Login to your account
            </Button>
          </form>
          <footer className={classes["card-footer"]}>
            <p className={classes.question}>Don't have an account</p>
            <Link to="/signup">Sign Up</Link>
          </footer>
        </div>
      </div>
    </section>
  );
};

export default LoginPage;
