import classes from "../UI/Result.module.css";

const Result = (props) => {
  return <h1 className={classes["searched-heading"]}>{props.text}</h1>;
};

export default Result;
