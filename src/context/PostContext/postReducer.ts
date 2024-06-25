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
        isLoading: payload as boolean
      }
    }

    case PostActionTypes.LOAD_POSTS: {
      return {
        ...state,
        posts: [...state.posts, ...(payload as Post[])]
      }
    }

    default: {
      return state
    }
  }
}
