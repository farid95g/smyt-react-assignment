import React from 'react'
import { Layout } from '@smyt/components'
import { Outlet } from 'react-router-dom'

export const App: React.FC = () => {
  return (
    <Layout>
      <Outlet />
    </Layout>
  )
}
