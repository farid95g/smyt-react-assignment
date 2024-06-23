import { AxiosResponse } from 'axios'

export {}

declare global {
  type RequestParams = Record<string, unknown>

  type ApiResponse = Promise<AxiosResponse>
}
