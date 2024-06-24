import { App } from '@smyt/App'
import { HomePage, PostPage } from '@smyt/pages'
import React from 'react'

type RouteType = {
  path: string
  element: React.ReactNode | null
}

type RoutesType = RouteType & {
  children: RouteType[]
}

export const routes: RoutesType[] = [
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <HomePage />
      },
      {
        path: '/post/:id',
        element: <PostPage />
      }
    ]
  }
]
