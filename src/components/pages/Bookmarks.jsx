import React from "react";
import { useSelector } from "react-redux";

import ModalCard from "../UI/ModalCard";

const Bookmarks = () => {
  const user = useSelector((state) => state.auth.uid);

  return <section>{user ? <h1>bookmarks</h1> : <ModalCard />}</section>;
};

export default Bookmarks;
