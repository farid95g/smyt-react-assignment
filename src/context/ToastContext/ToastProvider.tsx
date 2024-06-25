import React, { useCallback, useReducer } from 'react'
import { ToastContext, toastReducer } from '@smyt/context'
import type { ToastAction, ToastContextType } from '@smyt/types'

interface ToastProviderProps {
  children: React.ReactNode
}

export const ToastProvider: React.FC<ToastProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(toastReducer, {
    message: '',
    isOpen: false
  })

  const toggleIsOpen = useCallback((type: string, message?: string) => {
    dispatch({ type, payload: message } as ToastAction)
  }, [])

  const toastContext = {
    message: state.message,
    isOpen: state.isOpen,
    toggleIsOpen
  } as ToastContextType

  return (
    <ToastContext.Provider value={toastContext}>
      {children}
    </ToastContext.Provider>
  )
}
