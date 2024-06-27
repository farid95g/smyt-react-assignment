import React, { useReducer } from 'react'
import { ModalContextType } from '@smyt/types'
import { ModalContext, modalReducer } from '@smyt/context'
import { ModalActionTypes } from '@smyt/utils'

interface ModalProviderProps {
  children: React.ReactNode
}

export const ModalProvider: React.FC<ModalProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(modalReducer, {
    isOpen: false
  })

  const toggleModalVisibility = (type: ModalActionTypes) => {
    dispatch({ type })
  }

  const modalContext = {
    isOpen: state.isOpen,
    toggleModalVisibility
  } as ModalContextType

  return (
    <ModalContext.Provider value={modalContext}>
      {children}
    </ModalContext.Provider>
  )
}
