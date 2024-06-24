import { api } from '@smyt/api'
import type { Post } from '@smyt/types'
import { POSTS_PER_REQUEST } from '@smyt/utils'

interface PostService {
  loadPosts: (_start: number) => Promise<Post[]>

  getPostById: (id: number) => Promise<Post>
}

export const postService: PostService = {
  async loadPosts(_start: number): Promise<Post[]> {
    const requestParams: RequestParams = {
      params: { _start, _limit: POSTS_PER_REQUEST }
    }

    const response = await api.get('/photos', requestParams)
    return response.data
  },

  async getPostById(id: number): Promise<Post> {
    const response = await api.get(`/photos/${id}`)
    return response.data
  }
}
