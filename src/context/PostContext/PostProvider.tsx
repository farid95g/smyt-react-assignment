import React, { useCallback, useContext, useReducer } from 'react'
import { PostContext, ToastContext, postReducer } from '@smyt/context'
import type { Post, PostAction, PostContextType } from '@smyt/types'
import {
  POSTS_PER_REQUEST,
  PostActionTypes,
  ToastVisibility
} from '@smyt/utils'
import { postService } from '@smyt/services'

interface PostProviderProps {
  children: React.ReactNode
}

export const PostProvider: React.FC<PostProviderProps> = ({ children }) => {
  const { toggleIsOpen } = useContext(ToastContext)!

  const [state, dispatch] = useReducer(postReducer, {
    isLoading: false,
    posts: [],
    start: 0,
    query: '',
    isLoadedAll: false,
    error: ''
  })

  const updateStart = (start: number) => {
    dispatch({ type: PostActionTypes.SET_START, payload: start })
  }

  const toggleLoader = useCallback((isVisible: boolean) => {
    dispatch({ type: PostActionTypes.IS_LOADING, payload: isVisible })
  }, [])

  const loadPosts = useCallback(
    async (
      type: PostActionTypes.LOAD_POSTS | PostActionTypes.SEARCH_POSTS,
      query?: string
    ) => {
      try {
        dispatch({ type: PostActionTypes.SET_ERROR, payload: '' })
        toggleIsOpen(ToastVisibility.HIDE)
        toggleLoader(true)
        const posts = (await postService.loadPosts(
          state.start,
          query as string
        )) as Post[]
        dispatch({ type, payload: posts } as PostAction)
        dispatch({
          type: PostActionTypes.IS_LOADED_ALL,
          payload: posts.length === 0
        })
        updateStart(state.start + POSTS_PER_REQUEST)
      } catch (e) {
        dispatch({
          type: PostActionTypes.SET_ERROR,
          payload: (e as ApiError).message
        })
        toggleIsOpen(ToastVisibility.SHOW, (e as ApiError).message)
      } finally {
        toggleLoader(false)
      }
    },
    [state.start, toggleLoader, toggleIsOpen]
  )

  const setSearchQuery = useCallback((query: string) => {
    dispatch({ type: PostActionTypes.SET_SEARCH_QUERY, payload: query })
  }, [])

  const emptyPosts = () => {
    dispatch({ type: PostActionTypes.EMPTY_POSTS })
  }

  const postContext = {
    isLoading: state.isLoading,
    posts: state.posts,
    start: state.start,
    query: state.query,
    isLoadedAll: state.isLoadedAll,
    error: state.error,
    updateStart,
    toggleLoader,
    loadPosts,
    setSearchQuery,
    emptyPosts
  } as PostContextType

  return (
    <PostContext.Provider value={postContext}>{children}</PostContext.Provider>
  )
}
