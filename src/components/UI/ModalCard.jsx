import { Link, useLocation } from "react-router-dom";
import React, { useState } from "react";
import ReactDOM from "react-dom";
import { useSelector } from "react-redux";

import Logo from "../../assets/logo.svg";

import classes from "./ModalCard.module.css";

const ModalCard = () => {
  const { pathname } = useLocation();
  const user = useSelector((state) => state.auth.value);
  const [closeModal, setCloseModal] = useState(false);

  const closeModalHandler = () => {
    setCloseModal(!closeModal);
    if (user) {
      pathname = "/";
    }
  };

  return (
    <>
      {!closeModal ? (
        <div>
          <div onClick={closeModalHandler} className={classes.backdrop}>
            <div className={classes.modal}>
              <header className={classes["modal-logo"]}>
                <Link to="/">
                  <img src={Logo} alt="logo" />
                </Link>
                <h1 className={classes["modal-header"]}>
                  Bookmarks are only available for registered users.
                </h1>
              </header>
              <footer className={classes["modal-footer"]}>
                <p className={classes["modal-text"]}>Please log in</p>
                <Link className={classes["modal-link"]} to="/login">
                  Login
                </Link>
              </footer>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

const Modal = (props) => {
  return ReactDOM.createPortal(
    <ModalCard />,
    document.querySelector("#modal-root")
  );
};

export default Modal;
