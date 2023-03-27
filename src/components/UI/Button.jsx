import classes from "../UI/Button.module.css";

const Button = (props) => {
  return (
    <button
      className={`${classes.btn} ${classes["btn--primary"]}`}
      type={props.type}
    >
      {props.text}
    </button>
  );
};

export default Button;
