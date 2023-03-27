import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { Link } from "react-router-dom";

import Card from "../UI/Card";
import Button from "../UI/Button";

import classes from "./SignUpPage.module.css";

import Logo from "../../assets/logo.svg";

const SignUpPage = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const auth = getAuth();

  const handleSignUp = (e) => {
    e.preventDefault();

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        window.location = "/login";
        setEmail("");
        setPassword("");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log("Error:", errorCode, errorMessage);
      });
  };

  return (
    <section>
      <Link className={classes["card-logo"]} to="/">
        <img src={Logo} alt="logo" />
      </Link>
      <Card
        header={"Sign Up"}
        question={"Already have an account?"}
        text={"Login"}
      >
        <form onSubmit={handleSignUp}>
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
          <Button type="submit" text={"Create an account"} />
        </form>
      </Card>
    </section>
  );
};

export default SignUpPage;
