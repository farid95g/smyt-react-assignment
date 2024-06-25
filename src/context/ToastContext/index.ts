import { createContext } from 'react'
import type { ToastContextType } from '@smyt/types'

export const ToastContext = createContext<ToastContextType | null>(null)
