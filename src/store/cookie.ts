import Cookies from 'js-cookie'

export const setAccountKey = (value: string) => {
  if (value) {
    Cookies.set('account_key', value)
  } else {
    Cookies.remove('account_key')
  }
}

export const setReferenceKey = (value: string) => {
  if (value) {
    Cookies.set('r_key', value)
  } else {
    Cookies.remove('r_key')
  }
}

export const setProfileName = (value: string) => {
  if (value) {
    Cookies.set('profile_set', value)
  } else {
    Cookies.remove('profile_set')
  }
}

export const setSessionId = (value: string) => {
  if (value) {
    Cookies.set('session_id', value)
  } else {
    Cookies.remove('session_id')
  }
}

export const setUserKey = (value: string) => {
  if (value) {
    Cookies.set('user_key', value)
  } else {
    Cookies.remove('user_key')
  }
}

export const getAccountKey = () => {
  return Cookies.get('account_key') || ''
}

export const getRKey = () => {
  return Cookies.get('r_key') || ''
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
  Cookies.remove('profile_set')
  Cookies.remove('user_key')
  Cookies.remove('r_key')
}
