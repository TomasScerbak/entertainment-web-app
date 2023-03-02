import { Outlet } from "react-router-dom";
import Navigation from "../Navigation";
import SearchBar from "../UI/SearchBar";

const RootLayout = () => {
  return (
    <>
      <Navigation />
      <main>
        <SearchBar />
        <Outlet />
      </main>
    </>
  );
};

export default RootLayout;
