import { Link } from "react-router-dom";

const SignUpPage = () => {
  return (
    <section>
      <div>
        <header>
          <h1>Sign Up</h1>
        </header>
        <form>
          <input type="email" name="email" />
          <input type="password" name="password" />
          <input type="password" name="repeat-password" id="" />
        </form>
        <button>Create an account</button>
        <footer>
          <p>Already have an account?</p>
          <Link to="/login">Login</Link>
        </footer>
      </div>
    </section>
  );
};

export default SignUpPage;
