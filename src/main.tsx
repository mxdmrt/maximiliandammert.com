import "./index.css";

import { createRouter, RouterProvider } from "@tanstack/react-router";
import React from "react";
import ReactDOM from "react-dom/client";

import LoadingSpinner from "./components/LoadingSpinner";
import PageNotFound from "./components/PageNotFound";
import { routeTree } from "./routeTree.gen";

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

const router = createRouter({
  routeTree,
  defaultNotFoundComponent: PageNotFound,
  defaultPendingComponent: LoadingSpinner,
  scrollRestoration: true,
});

const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error('Could not find root element with id "root".');
}

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
