import React from "react";
import { useSelector } from "react-redux";

const Bookmarks = () => {
  const user = useSelector((state) => state.auth.uid);
  return <div>{user && <h1>Bookmarks</h1>}</div>;
};

export default Bookmarks;
