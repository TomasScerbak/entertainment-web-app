import { Link } from "react-router-dom";
import classes from "../UI/Logo.module.css";

import LogoImage from "../../assets/logo.svg";

const Logo = () => {
  return (
    <Link className={classes.logo} to="/">
      <img src={LogoImage} alt="logo" />
    </Link>
  );
};

export default Logo;
