import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./index.css";
import Error from "./routes/Error";
import Home from "./routes/Home";
import Imprint from "./routes/Imprint";
import PageLayout from "./routes/PageLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <PageLayout />,
    errorElement: <Error />,
    children: [
      {
        errorElement: <Error />,
        children: [
          {
            index: true,
            element: <Home />,
          },
          {
            path: "/imprint",
            element: <Imprint />,
          },
          {
            path: "*",
            element: <Error />,
          },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
