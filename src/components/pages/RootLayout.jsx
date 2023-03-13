import { Outlet, useLocation } from "react-router-dom";
import Navigation from "../Navigation";

const RootLayout = () => {
  const { pathname } = useLocation();

  return (
    <>
      {pathname === "/login" || pathname === "/signup" ? null : <Navigation />}
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default RootLayout;
