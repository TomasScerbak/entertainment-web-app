import { Link } from "react-router-dom";

import classes from "../UI/Card.module.css";

const Card = (props) => {
  return (
    <div className={classes["card-wrapper"]}>
      <div className={classes.card}>
        <header>
          <h1>{props.header}</h1>
        </header>
        <footer className={classes["card-footer"]}>
          <p className={classes.question}>{props.question}</p>
          <Link to="/signup">{props.text}</Link>
        </footer>
      </div>
    </div>
  );
};

export default Card;
