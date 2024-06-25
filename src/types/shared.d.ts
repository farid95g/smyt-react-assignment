import { PostActionTypes, ToastVisibility } from '@smyt/utils'

export interface Post {
  albumId: number
  id: number
  title: string
  url: string
  thumbnailUrl: string
}

export type ToastActionType = ToastVisibility.SHOW | ToastVisibility.HIDE

export interface ToastContextType {
  message: string
  isOpen: boolean
  toggleIsOpen: (type: ToastActionType, message?: string) => void
}

export interface ToastAction {
  type: ToastActionType
  payload?: string
}

type PostActionPayload = boolean | Post[] | string | number
export type PostActionType =
  | PostActionTypes.IS_LOADING
  | PostActionTypes.LOAD_POSTS
  | PostActionTypes.SET_START
  | PostActionTypes.SET_SEARCH_QUERY
  | PostActionTypes.SEARCH_POSTS
  | PostActionTypes.EMPTY_POSTS
  | PostActionTypes.IS_LOADED_ALL

export interface PostAction {
  type: PostActionType
  payload?: PostActionPayload
}

export interface PostContextType {
  isLoading: boolean
  posts: Post[]
  start: number
  query: string
  isLoadedAll: boolean
  updateStart: (start: number) => void
  toggleLoader: (isVisible: boolean) => void
  loadPosts: (
    type: PostActionTypes.LOAD_POSTS | PostActionTypes.SEARCH_POSTS,
    query?: string
  ) => void
  setSearchQuery: (query: string) => void
  emptyPosts: () => void
}
