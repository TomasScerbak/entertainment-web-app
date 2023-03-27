import classes from "../UI/FormControl.module.css";

const FormControl = (props) => {
  return <div className={classes["form-control"]}>{props.children}</div>;
};

export default FormControl;
