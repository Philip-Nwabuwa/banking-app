import { useMutation } from '@tanstack/react-query'
import {
  AccountType,
  BusinessType,
  LoginType,
  ProfileType,
  forgotPasswordType,
} from '@/lib/Validations/auth'
import { setBVNType, setUsernameType } from '@/lib/Validations/kyc'
import {
  changeAuthPasswordType,
  changeAuthPinType,
  resetAuthPinType,
  setAuthPinType,
} from '@/lib/Validations/pin'
import axios from 'axios'
import { baseUrl, config } from './api'

export const useLogin = () => {
  const mutationFn = async (payload: LoginType) => {
    const data = payload

    return await axios.post(`${baseUrl}/auth/user/login`, data, config)
  }
  const {
    mutate,
    mutateAsync,
    isPending: isLoading,
    data,
  } = useMutation({ mutationFn: mutationFn })

  return { mutate, mutateAsync, isLoading, data }
}

export const useSignUpAccountType = () => {
  const mutationFn = async (payload: AccountType) => {
    const data = payload

    return await axios.post(`${baseUrl}/auth/user/create`, data, config)
  }
  const {
    mutate,
    mutateAsync,
    isPending: isLoading,
    data,
  } = useMutation({ mutationFn: mutationFn })

  return { mutate, mutateAsync, isLoading, data }
}
export const useProfileUpdate = () => {
  const mutationFn = async (payload: ProfileType) => {
    const data = payload

    return await axios.post(`${baseUrl}/user/update/profile`, data, config)
  }
  const {
    mutate,
    mutateAsync,
    isPending: isLoading,
    data,
  } = useMutation({ mutationFn: mutationFn })

  return { mutate, mutateAsync, isLoading, data }
}

export const useBusinessUpdate = () => {
  const mutationFn = async (payload: BusinessType) => {
    const data = payload

    return await axios.post(`${baseUrl}/account/update/profile`, data, config)
  }
  const {
    mutate,
    mutateAsync,
    isPending: isLoading,
    data,
  } = useMutation({ mutationFn: mutationFn })

  return { mutate, mutateAsync, isLoading, data }
}

export const useLogout = () => {
  const mutationFn = async () => {
    return await axios.get(`${baseUrl}/auth/user/logout`, config)
  }
  const {
    mutate,
    mutateAsync,
    isPending: isLoading,
  } = useMutation({ mutationFn: mutationFn })

  return { mutate, mutateAsync, isLoading }
}

export const usePasswordReset = () => {
  const mutationFn = async (payload: forgotPasswordType) => {
    const data = payload

    return await axios.post(`${baseUrl}/auth/password/reset`, data, config)
  }
  const {
    mutate,
    mutateAsync,
    isPending: isLoading,
    data,
  } = useMutation({ mutationFn: mutationFn })

  return { mutate, mutateAsync, isLoading, data }
}
export const useGenerateOTP = () => {
  const mutationFn = async () => {
    const data = {
      service: 'PASSWORD_RESET',
    }

    return await axios.post(`${baseUrl}/auth/auth-codes/create`, data, config)
  }
  const {
    mutate,
    mutateAsync,
    isPending: isLoading,
    data,
  } = useMutation({ mutationFn: mutationFn })

  return { mutate, mutateAsync, isLoading, data }
}
export const useSetUsername = () => {
  const mutationFn = async (payload: setUsernameType) => {
    const data = payload

    return await axios.post(`${baseUrl}/account/update/username`, data, config)
  }
  const {
    mutate,
    mutateAsync,
    isPending: isLoading,
    data,
  } = useMutation({ mutationFn: mutationFn })

  return { mutate, mutateAsync, isLoading, data }
}

export const useSetBVN = () => {
  const mutationFn = async (payload: setBVNType) => {
    const data = payload

    return await axios.post(`${baseUrl}/user/kyc/bvn`, data, config)
  }
  const {
    mutate,
    mutateAsync,
    isPending: isLoading,
    data,
  } = useMutation({ mutationFn: mutationFn })

  return { mutate, mutateAsync, isLoading, data }
}

export const useSetAuthPin = () => {
  const mutationFn = async (payload: setAuthPinType) => {
    const data = payload

    return await axios.post(`${baseUrl}/auth/auth-pin/set`, data, config)
  }
  const {
    mutate,
    mutateAsync,
    isPending: isLoading,
    data,
  } = useMutation({ mutationFn: mutationFn })

  return { mutate, mutateAsync, isLoading, data }
}

export const useChangeAuthPin = () => {
  const mutationFn = async (payload: changeAuthPinType) => {
    const data = payload

    return await axios.post(`${baseUrl}/auth/auth-pin/change`, data, config)
  }
  const {
    mutate,
    mutateAsync,
    isPending: isLoading,
    data,
  } = useMutation({ mutationFn: mutationFn })

  return { mutate, mutateAsync, isLoading, data }
}

export const useChangeAuthPassword = () => {
  const mutationFn = async (payload: changeAuthPasswordType) => {
    const data = payload

    return await axios.post(`${baseUrl}/auth/password/change`, data, config)
  }
  const {
    mutate,
    mutateAsync,
    isPending: isLoading,
    data,
  } = useMutation({ mutationFn: mutationFn })

  return { mutate, mutateAsync, isLoading, data }
}

export const useResetAuthPin = () => {
  const mutationFn = async (payload: resetAuthPinType) => {
    const data = payload

    return await axios.post(`${baseUrl}/auth/auth-pin/reset`, data, config)
  }
  const {
    mutate,
    mutateAsync,
    isPending: isLoading,
    data,
  } = useMutation({ mutationFn: mutationFn })

  return { mutate, mutateAsync, isLoading, data }
}
