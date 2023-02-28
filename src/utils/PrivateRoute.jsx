import { Route, Redirect } from "react-router-dom";
import { useContext } from "react";

import { AuthContext } from "../store/AuthContext";

const PrivateRoute = ({ component: RouteComponent, ...rest }) => {
  const { currentUser } = useContext(AuthContext);

  return (
    <Route>
      {...rest}
      render=
      {(routeProps) =>
        !!currentUser ? (
          <RouteComponent {...routeProps} />
        ) : (
          <Redirect to={"/login"} />
        )
      }
    </Route>
  );
};

export default PrivateRoute;
