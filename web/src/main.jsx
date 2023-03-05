import { ClientContext } from "graphql-hooks";
import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { client } from "./api";

import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";
import { Project } from "./pages/Project";

import { SkeletonTheme } from "react-loading-skeleton";
import "./global.css";

const router = createBrowserRouter([
  {
    errorElement: <NotFound />,
  },
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/projeto/:id",
    element: <Project />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <SkeletonTheme baseColor="#cccccc" borderRadius="0.5rem">
    <React.StrictMode>
      <ClientContext.Provider value={client}>
        <RouterProvider router={router} />
      </ClientContext.Provider>
    </React.StrictMode>
  </SkeletonTheme>
);
