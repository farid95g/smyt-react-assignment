import { Post, PostAction } from '@smyt/types'
import { PostActionTypes } from '@smyt/utils'

interface PostState {
  isLoading: boolean
  posts: Post[]
  start: number
  query: string
  isLoadedAll: boolean
  error: string
}

export const postReducer = (state: PostState, action: PostAction) => {
  const { type, payload } = action

  switch (type) {
    case PostActionTypes.IS_LOADING: {
      return {
        ...state,
        isLoading: payload as boolean
      }
    }

    case PostActionTypes.LOAD_POSTS: {
      return {
        ...state,
        posts: [...state.posts, ...(payload as Post[])]
      }
    }

    case PostActionTypes.SET_START: {
      return {
        ...state,
        start: payload as number
      }
    }

    case PostActionTypes.SET_SEARCH_QUERY: {
      return {
        ...state,
        query: payload as string
      }
    }

    case PostActionTypes.SEARCH_POSTS: {
      return {
        ...state,
        posts: payload as Post[]
      }
    }

    case PostActionTypes.EMPTY_POSTS: {
      return {
        ...state,
        posts: []
      }
    }

    case PostActionTypes.IS_LOADED_ALL: {
      return {
        ...state,
        isLoadedAll: payload as boolean
      }
    }

    case PostActionTypes.SET_ERROR: {
      return {
        ...state,
        error: payload as string
      }
    }

    default: {
      return state
    }
  }
}
