import Cookies from 'js-cookie'

export const setAccountKey = (value: string) => {
  if (value) {
    Cookies.set('account_key', value, { expires: 1 / 48 })
  } else {
    Cookies.remove('account_key')
  }
}

export const setSessionId = (value: string) => {
  if (value) {
    Cookies.set('session_id', value, { expires: 1 / 48 })
  } else {
    Cookies.remove('session_id')
  }
}

export const setUserKey = (value: string) => {
  if (value) {
    Cookies.set('user_key', value, { expires: 1 / 48 })
  } else {
    Cookies.remove('user_key')
  }
}

export const getAccountKey = () => {
  return Cookies.get('account_key') || ''
}

export const getSessionId = () => {
  return Cookies.get('session_id') || ''
}

export const getUserKey = () => {
  return Cookies.get('user_key') || ''
}

export const clearAllCookies = () => {
  Cookies.remove('account_key')
  Cookies.remove('session_id')
  Cookies.remove('user_key')
}
