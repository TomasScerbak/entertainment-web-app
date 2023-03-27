import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";

import Logo from "../UI/Logo";
import Card from "../UI/Card";
import FormControl from "../UI/FormControl";
import Button from "../UI/Button";
import Error from "../UI/Error";

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
      <Logo />
      <Card
        header={"Login"}
        question={"Don't have an account?"}
        text={"Sign Up"}
      >
        <form onSubmit={handleLogin}>
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
          <Button type="submit" text={"Login to your account"} />
        </form>
      </Card>
    </section>
  );
};

export default LoginPage;
