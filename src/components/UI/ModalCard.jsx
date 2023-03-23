import { Link } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom";

import Logo from "../../assets/logo.svg";

import classes from "./ModalCard.module.css";

const ModalCard = () => {
  return (
    <div>
      <div className={classes.backdrop}>
        <div className={classes.modal}>
          <header>
            <Link to="/">
              <img src={Logo} alt="logo" />
            </Link>
            <h1 className={classes["modal-header"]}>
              Bookmarks are available only for registered users
            </h1>
          </header>
          <p className={classes["modal-text"]}>please log in</p>
          <footer>
            <Link className={classes["modal-link"]} to="/login">
              Login
            </Link>
          </footer>
        </div>
      </div>
    </div>
  );
};

const Modal = (props) => {
  return ReactDOM.createPortal(
    <ModalCard />,
    document.querySelector("#modal-root")
  );
};

export default Modal;
