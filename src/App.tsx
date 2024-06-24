import React from 'react'
import { Outlet } from 'react-router-dom'
import { Layout, Toast } from '@smyt/components'

export const App: React.FC = () => {
  return (
    <>
      <Layout>
        <Outlet />
      </Layout>
      <Toast />
    </>
  )
}
