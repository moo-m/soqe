import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link
} from "react-router-dom";
import Profile from "./content/profile.js";
import Proshow from "./content/showpro.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Profile />
  },
  {
    path: "product",
    element: <Proshow />
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
