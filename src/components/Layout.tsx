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
        sx={{ padding: '5rem 0 1rem', minHeight: 'calc(100% - 4rem)' }}
      >
        {children}
      </Container>
    </main>
  )
}
