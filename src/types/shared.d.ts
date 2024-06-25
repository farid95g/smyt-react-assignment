import { PostActionTypes, ToastVisibility } from '@smyt/utils'

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

type PostActionPayload = boolean | Post[] | string
export type PostActionType =
  | PostActionTypes.IS_LOADING
  | PostActionTypes.LOAD_POSTS
  | PostActionTypes.SET_SEARCH_QUERY

export interface PostAction {
  type: PostActionType
  payload: PostActionPayload
}

export interface PostContextType {
  isLoading: boolean
  posts: Post[]
  query: string
  toggleLoader: (isVisible: boolean) => void
  loadPosts: (type: PostActionType, items: Post[]) => void
}
