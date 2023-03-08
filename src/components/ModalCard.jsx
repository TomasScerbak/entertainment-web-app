import { Link } from "react-router-dom";

const ModalCard = () => {
  return (
    <div>
      <header>
        <h1 className={classes["modal-header"]}>
          Bookmarks are available only for registered users
        </h1>
      </header>
      <p className={classes["modal-text"]}>please sign in</p>
      <footer>
        <Link className={classes["modal-link"]} to="login">
          Login
        </Link>
      </footer>
    </div>
  );
};

export default ModalCard;
