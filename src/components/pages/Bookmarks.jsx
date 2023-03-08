import React from "react";
import { useSelector } from "react-redux";

const Bookmarks = () => {
  const user = useSelector((state) => state.auth.uid);
  return (
    <section>
      <h1>bookmarks</h1>
    </section>
  );
};

export default Bookmarks;
