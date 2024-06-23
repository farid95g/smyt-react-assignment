import { AxiosResponse } from 'axios'
import { api } from '@smyt/api'
import { Post } from '@smyt/types'
import { POSTS_PER_REQUEST } from '@smyt/utils'

interface PostService {
  loadPosts: (_start: number) => Promise<Post[]>
}

export const postService: PostService = {
  async loadPosts(_start: number): Promise<Post[]> {
    const requestParams: RequestParams = {
      params: { _start, _limit: POSTS_PER_REQUEST }
    }

    const response: AxiosResponse = await api.get('/photos', requestParams)
    return response.data
  }
}
