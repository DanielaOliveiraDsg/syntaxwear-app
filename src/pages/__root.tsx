import * as React from 'react'
import { HeadContent, Link, Outlet, createRootRoute } from '@tanstack/react-router'

export const Route = createRootRoute({
  component: RootComponent,
  head: () => ({
    meta: [
      {title: 'Home - SynstaxWear'}
    ]
  }),
  notFoundComponent: () => {
    return (
      <div className="pt-40 text-center">
        <h1>404 - Page Not Found</h1>
        <Link to="/">Go Home</Link>
      </div>
    )
  }
})

function RootComponent() {
  return (
    <React.Fragment>
      <HeadContent />
      <Outlet />
    </React.Fragment>
  )
}
