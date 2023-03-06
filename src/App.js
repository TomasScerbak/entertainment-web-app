import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";

import store from "./store";

import Bookmarks from "./components/pages/Bookmarks";
import HomePage from "./components/pages/HomePage";
import Movies from "./components/pages/Movies";
import RootLayout from "./components/pages/RootLayout";
import TvSeries from "./components/pages/TvSeries";
import SignUpPage from "./components/pages/SignUpPage";
import LoginPage from "./components/pages/LoginPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "movies", element: <Movies /> },
      { path: "tvseries", element: <TvSeries /> },
      { path: "bookmarks", element: <Bookmarks /> },
      { path: "signup", element: <SignUpPage /> },
      { path: "login", element: <LoginPage /> },
    ],
  },
]);

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
