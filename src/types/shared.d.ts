import { ToastVisibility } from '@smyt/utils'

export interface Post {
  albumId: number
  id: number
  title: string
  url: string
  thumbnailUrl: string
}

export interface ToastContextType {
  message: string
  isOpen: boolean
  toggleIsOpen: (type: string, message?: string) => void
}

export interface ToastAction {
  type: ToastVisibility.SHOW | ToastVisibility.HIDE
  payload?: string
}
