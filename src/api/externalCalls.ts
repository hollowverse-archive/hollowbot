import axios from 'axios'
import {AxiosRequestConfig} from 'axios'

export function getRequest(config: AxiosRequestConfig) {
  try {
    return axios(config)
  } catch (error) {
    throw error
  }
}
