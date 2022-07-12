import { AxiosError } from 'axios'
import { api } from './api'

interface ErrorResponse {
  detail: string
  code?: string
}

export const getRepository = async () => {
  const res = await api.get(`/users/chinowisk15/repos`)
  .catch((err)=> err as AxiosError)
  if (!(res instanceof Error)) {
    return {data: res}
  }else{
    return { error: 'error' }
  }
}