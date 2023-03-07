import Logo from "../../assets/logo.svg";

const LoginPage = () => {
  return (
    <section>
      <img src={Logo} alt="logo" />
      <form>
        <h1>Login</h1>
        <input type="email" />
        <input type="password" name="password" id="password" />
      </form>
    </section>
  );
};

export default LoginPage;
