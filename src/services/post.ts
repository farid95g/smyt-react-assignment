import { AxiosError } from 'axios'
import { api } from '@smyt/api'
import type { Post } from '@smyt/types'
import { POSTS_PER_REQUEST } from '@smyt/utils'

interface PostService {
  loadPosts: (_start: number) => Promise<Post[] | AxiosError>

  getPostById: (id: number) => Promise<Post | AxiosError>
}

export const postService: PostService = {
  async loadPosts(_start: number): Promise<Post[] | AxiosError> {
    const requestParams: RequestParams = {
      params: { _start, _limit: POSTS_PER_REQUEST }
    }

    try {
      const response = await api.get('/photos', requestParams)
      return response.data
    } catch (e) {
      return Promise.reject(e)
    }
  },

  async getPostById(id: number): Promise<Post | AxiosError> {
    try {
      const response = await api.get(`/photos/${id}`)
      return response.data
    } catch (e) {
      return Promise.reject(e)
    }
  }
}
