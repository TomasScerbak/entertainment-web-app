import { Outlet, useLocation } from "react-router-dom";
import Navigation from "../Navigation";

const RootLayout = () => {
  const location = useLocation();

  return (
    <>
      {location.pathname === "/login" ||
      location.pathname === "/signup" ? null : (
        <Navigation />
      )}
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default RootLayout;
