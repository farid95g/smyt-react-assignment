import axios, { AxiosResponse } from 'axios'

interface API {
  get: (url: string, options?: RequestParams) => Promise<AxiosResponse>
}

const request = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com'
})

export const api: API = {
  async get(url: string, options?: RequestParams): Promise<AxiosResponse> {
    const response = await request.get(url, options)
    return response
  }
}
