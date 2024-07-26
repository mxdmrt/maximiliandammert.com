/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

import { createFileRoute } from '@tanstack/react-router'

// Import Routes

import { Route as rootRoute } from './routes/__root'

// Create Virtual Routes

const ImprintLazyImport = createFileRoute('/imprint')()
const IndexLazyImport = createFileRoute('/')()

// Create/Update Routes

const ImprintLazyRoute = ImprintLazyImport.update({
  path: '/imprint',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/imprint.lazy').then((d) => d.Route))

const IndexLazyRoute = IndexLazyImport.update({
  path: '/',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/index.lazy').then((d) => d.Route))

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexLazyImport
      parentRoute: typeof rootRoute
    }
    '/imprint': {
      id: '/imprint'
      path: '/imprint'
      fullPath: '/imprint'
      preLoaderRoute: typeof ImprintLazyImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export const routeTree = rootRoute.addChildren({
  IndexLazyRoute,
  ImprintLazyRoute,
})

/* prettier-ignore-end */

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/imprint"
      ]
    },
    "/": {
      "filePath": "index.lazy.tsx"
    },
    "/imprint": {
      "filePath": "imprint.lazy.tsx"
    }
  }
}
ROUTE_MANIFEST_END */