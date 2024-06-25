import { Post, PostAction } from '@smyt/types'
import { PostActionTypes } from '@smyt/utils'

interface PostState {
  isLoading: boolean
  posts: Post[]
  query: string
}

export const postReducer = (state: PostState, action: PostAction) => {
  const { type, payload } = action

  switch (type) {
    case PostActionTypes.IS_LOADING: {
      return {
        ...state,
        isLoading: true
      }
    }

    case PostActionTypes.LOAD_POSTS: {
      return {
        ...state,
        posts: [...state.posts, ...(payload as Post[])],
        isLoading: false
      }
    }

    case PostActionTypes.SET_SEARCH_QUERY: {
      return {
        ...state,
        query: payload
      }
    }

    default: {
      return state
    }
  }
}
