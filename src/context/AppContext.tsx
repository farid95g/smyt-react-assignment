import React from 'react'
import { ToastProvider, ModalProvider, PostProvider } from '@smyt/context'

interface AppContextProps {
  children: React.ReactNode
}

export const AppContext: React.FC<AppContextProps> = ({ children }) => {
  return (
    <ToastProvider>
      <ModalProvider>
        <PostProvider>{children}</PostProvider>
      </ModalProvider>
    </ToastProvider>
  )
}
