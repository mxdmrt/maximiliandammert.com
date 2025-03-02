import './index.css';

import { createRouter, RouterProvider } from '@tanstack/react-router';
import React from 'react';
import ReactDOM from 'react-dom/client';

import LoadingSpinner from './components/LoadingSpinner';
import PageNotFound from './components/PageNotFound';
import { routeTree } from './routeTree.gen';

declare module '@tanstack/react-router' {
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

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
