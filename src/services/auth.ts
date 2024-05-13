import {
  AccountType,
  LoginType,
  VerifyOtpType,
  forgotPasswordType,
} from '@/lib/validation'
import { baseUrl, config } from './api'
import axios from 'axios'
import { useMutation, useQuery } from '@tanstack/react-query'

export const useLogin = () => {
  const mutationFn = async (payload: LoginType) => {
    const data = payload

    return await axios.post(`${baseUrl}/1.0/auth/user/login`, data, config)
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

    return await axios.post(`${baseUrl}/1.0/auth/user/create`, data, config)
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
    return await axios.get(`${baseUrl}/1.0/auth/user/logout`, config)
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

    return await axios.post(`${baseUrl}/1.0/auth/password/reset`, data, config)
  }
  const {
    mutate,
    mutateAsync,
    isPending: isLoading,
    data,
  } = useMutation({ mutationFn: mutationFn })

  return { mutate, mutateAsync, isLoading, data }
}

export const useVerifyOTP = () => {
  const mutationFn = async (payload: VerifyOtpType) => {
    const data = payload

    return await axios.post(
      `${baseUrl}/1.0/auth/auth-codes/verify`,
      data,
      config
    )
  }
  const {
    mutate,
    mutateAsync,
    isPending: isLoading,
    data,
  } = useMutation({ mutationFn: mutationFn })

  return { mutate, mutateAsync, isLoading, data }
}
