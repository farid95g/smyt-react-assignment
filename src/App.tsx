import React, { useCallback, useState } from 'react'
import { Outlet } from 'react-router-dom'
import { Layout, Toast } from '@smyt/components'

export const App: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(true)

  // const handleClick = useCallback((isOpen: boolean) => {
  //   setIsOpen(isOpen)
  // }, [])

  const handleClose = useCallback(
    (event?: React.SyntheticEvent | Event, reason?: string) => {
      if (reason === 'clickaway') {
        return
      }

      setIsOpen(false)
    },
    []
  )

  return (
    <>
      <Layout>
        <Outlet />
      </Layout>
      <Toast
        isOpen={isOpen}
        handleClose={handleClose}
      />
    </>
  )
}
