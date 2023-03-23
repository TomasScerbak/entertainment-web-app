import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { saveUser } from "./store/authSlice";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import app from "./base";

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
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.value);

  const auth = getAuth(app);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(saveUser(user.refreshToken));
      } else {
        dispatch(saveUser(undefined));
      }
    });
  }, [auth, dispatch, user]);

  return <RouterProvider router={router} />;
}

export default App;
