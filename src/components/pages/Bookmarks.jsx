import React from "react";
import { useSelector } from "react-redux";

import Modal from "../UI/ModalCard";

const Bookmarks = () => {
  const user = useSelector((state) => state.auth.value);

  return <section>{user ? <h1>bookmarks</h1> : <Modal />}</section>;
};

export default Bookmarks;
