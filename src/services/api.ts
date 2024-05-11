import { AxiosRequestConfig } from 'axios'
import Cookies from 'js-cookie'

const session_id = Cookies.get('session_id')
const user_key = Cookies.get('user_key')
const account_key = Cookies.get('account_key')

const headers: AxiosRequestConfig['headers'] = {
  'Content-Type': 'application/json',
  'Access-Control-Allow-Origin': '*',
  ...(user_key && { 'User-Key': user_key }),
  ...(session_id && { 'Session-Id': session_id }),
  ...(account_key && { 'Account-Key': account_key }),
}
export const config: AxiosRequestConfig = {
  headers,
}

if (!process.env.NEXT_PUBLIC_BASE_URL) {
  throw new Error('BASE_URL environment variable is not defined')
}

export const baseUrl = process.env.NEXT_PUBLIC_BASE_URL
