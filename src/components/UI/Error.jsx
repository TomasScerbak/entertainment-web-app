import classes from "../UI/Error.module.css";

const Error = (props) => {
  return <p className={classes.error}>{props.text}</p>;
};

export default Error;
