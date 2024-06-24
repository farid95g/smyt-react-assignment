export interface Post {
  albumId: number
  id: number
  title: string
  url: string
  thumbnailUrl: string
}

export interface ToastContextType {
  isOpen: boolean
  toggleIsOpen: (type: string) => void
}

export interface ToastAction {
  type: ToastVisibility.SHOW | ToastVisibility.HIDE
}
