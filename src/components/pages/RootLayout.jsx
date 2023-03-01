import { Outlet } from "react-router-dom";
import Navigation from "../Navigation";
import SearchBar from "../UI/SearchBar";

const RootLayout = () => {
  return (
    <div>
      <Navigation />
      <main>
        <SearchBar />
        <Outlet />
      </main>
    </div>
  );
};

export default RootLayout;
