import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";

import Logo from "../UI/Logo";
import Card from "../UI/Card";
import FormControl from "../UI/FormControl";
import Button from "../UI/Button";
import Error from "../UI/Error";

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
      <Logo />
      <Card
        header={"Sign Up"}
        question={"Already have an account?"}
        text={"Login"}
      >
        <form onSubmit={handleSignUp}>
          <FormControl>
            <input
              placeholder="Email address"
              onChange={(e) => setEmail(e.target.value)}
              type="email"
            />
            {email === "" ? <Error text={"Can't be empty"} /> : ""}
          </FormControl>
          <FormControl>
            <input
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              type="password"
            />
            {password === "" ? <Error text={"Can't be empty"} /> : ""}
          </FormControl>
          <Button type="submit" text={"Create an account"} />
        </form>
      </Card>
    </section>
  );
};

export default SignUpPage;
