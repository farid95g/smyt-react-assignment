import React, { useCallback, useReducer } from 'react'
import { PostContext, postReducer } from '@smyt/context'
import type {
  Post,
  PostAction,
  PostActionType,
  PostContextType
} from '@smyt/types'

interface PostProviderProps {
  children: React.ReactNode
}

export const PostProvider: React.FC<PostProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(postReducer, {
    isLoading: false,
    posts: [],
    query: ''
  })

  const loadPosts = useCallback((type: PostActionType, posts: Post[]) => {
    dispatch({ type, payload: posts } as PostAction)
  }, [])

  const postContext = {
    isLoading: state.isLoading,
    posts: state.posts,
    query: state.query,
    loadPosts
  } as PostContextType

  return (
    <PostContext.Provider value={postContext}>{children}</PostContext.Provider>
  )
}
