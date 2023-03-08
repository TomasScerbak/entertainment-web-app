import React, { Fragment } from "react";
import { Navigate } from "react-router";
import { useSelector } from "react-redux";

const ProtectedRoute = ({ component: Component }) => {
  const user = useSelector((state) => state.auth.uid);

  return (
    <Fra>
      render=
      {(props) => {
        if (user) {
          return <Component {...props} />;
        } else {
          return <Navigate to="login" />;
        }
      }}
    </Fra>
  );
};

export default ProtectedRoute;
