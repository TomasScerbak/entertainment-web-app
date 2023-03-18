import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

import { useState } from "react";
import { Link } from "react-router-dom";
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
        window.location = "login";
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
      <img src={Logo} alt="logo" />
      <div>
        <header>
          <h1>Sign Up</h1>
        </header>
        <form onSubmit={handleSignUp}>
          <input type="email" name="email" />
          <input type="password" name="password" />
          <button type="submit">Create an account</button>
        </form>
        <footer>
          <p>Already have an account?</p>
          <Link to="/login">Login</Link>
        </footer>
      </div>
    </section>
  );
};

export default SignUpPage;
