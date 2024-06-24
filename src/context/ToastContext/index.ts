import { createContext } from 'react'
import { ToastContextType } from '@smyt/types'

export const ToastContext = createContext<ToastContextType | null>(null)
