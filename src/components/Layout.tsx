import React from 'react'
import { Container } from '@mui/material'
import { Header } from '@smyt/components'

interface LayoutProps {
  children: React.ReactNode
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <main>
      <Header />
      <Container
        maxWidth='xl'
        sx={{ padding: '1rem 0' }}
      >
        {children}
      </Container>
    </main>
  )
}
