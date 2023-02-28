import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./components/pages/HomePage";

import RootLayout from "./components/pages/RootLayout";

const router = [
  {
    path: "/",
    element: <RootLayout />,
    children: [{ index: true, element: <HomePage /> }],
  },
];

function App() {
  return (
    <div className="App">
      <h1>TEST</h1>
    </div>
  );
}

export default App;
