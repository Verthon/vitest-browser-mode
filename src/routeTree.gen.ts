/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as BookAppointmentImport } from './routes/book-appointment'
import { Route as IndexImport } from './routes/index'

// Create/Update Routes

const BookAppointmentRoute = BookAppointmentImport.update({
  id: '/book-appointment',
  path: '/book-appointment',
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/book-appointment': {
      id: '/book-appointment'
      path: '/book-appointment'
      fullPath: '/book-appointment'
      preLoaderRoute: typeof BookAppointmentImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '/book-appointment': typeof BookAppointmentRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '/book-appointment': typeof BookAppointmentRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexRoute
  '/book-appointment': typeof BookAppointmentRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths: '/' | '/book-appointment'
  fileRoutesByTo: FileRoutesByTo
  to: '/' | '/book-appointment'
  id: '__root__' | '/' | '/book-appointment'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  BookAppointmentRoute: typeof BookAppointmentRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  BookAppointmentRoute: BookAppointmentRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/book-appointment"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/book-appointment": {
      "filePath": "book-appointment.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
