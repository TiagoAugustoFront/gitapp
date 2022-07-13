import { AxiosError } from 'axios'
import { api } from './api'

interface ErrorResponse {
  detail: string
  code?: string
}

export const getUser = async (name:string) => {
  const res = await api.get<IUser>(`/users/${name}`)
  .catch((err)=> err as AxiosError)
  if (!(res instanceof Error)) {
    return {data: res}
  }else{
    return { error: 'error' }
  }
}

export const getRepository = async (name:string) => {
  const res = await api.get(`/users/${name}/repos`)
  .catch((err)=> err as AxiosError)
  if (!(res instanceof Error)) {
    return {data: res}
  }else{
    return { error: res.message }
  }
}