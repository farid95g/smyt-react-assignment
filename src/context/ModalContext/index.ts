import { createContext } from 'react'
import { ModalContextType } from '@smyt/types'

export const ModalContext = createContext<ModalContextType | null>(null)
