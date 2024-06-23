import axios from 'axios'

interface Api {
  get: (url: string, options?: RequestParams) => ApiResponse
}

const request = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com'
})

export const api: Api = {
  async get(url: string, options?: RequestParams): ApiResponse {
    const response = await request.get(url, options)
    return response
  }
}
