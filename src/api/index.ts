import axios from 'axios'

const request = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com'
})

export const api = {
  async get(url: string, options?: RequestParams) {
    const response = await request.get(url, options)
    return response
  }
}
