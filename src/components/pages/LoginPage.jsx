import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { Link } from "react-router-dom";

import Card from "../UI/Card";
import Button from "../UI/Button";

import Logo from "../../assets/logo.svg";

import classes from "../pages/LoginPage.module.css";

const LoginPage = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const auth = getAuth();

  const handleLogin = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log("Signed user:", user);
        window.location = "/";
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log("An error occured:", errorCode, errorMessage);
      });
  };

  return (
    <section>
      <Link className={classes.logo} to="/">
        <img src={Logo} alt="logo" />
      </Link>
      <Card header={"Login"} question={"Don't have an account?"} text={"Login"}>
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
          <Button type="submit" text={"Login to your account"} />
        </form>
      </Card>
    </section>
  );
};

export default LoginPage;
