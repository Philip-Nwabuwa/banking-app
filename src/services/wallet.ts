import axios from 'axios'
import { baseUrl, config } from './api'
import { useMutation, useQuery } from '@tanstack/react-query'
import { createWalletType } from '@/lib/validation'

export const useGetBalance = () => {
  const queryFn = async () => {
    return await axios.get(`${baseUrl}/1.0/wallet/balance`, config)
  }
  const { data, refetch, isLoading, isError, error } = useQuery({
    queryKey: ['balance'],
    queryFn: queryFn,
    refetchOnReconnect: true,
    refetchOnWindowFocus: true,
  })

  return { data, refetch, isLoading, isError, error }
}

export const useBankList = () => {
  const queryFn = async () => {
    return await axios.get(
      `${baseUrl}/1.0/services/bank-transfer/list-banks`,
      config
    )
  }
  const { data, refetch, isLoading, isError, error } = useQuery({
    queryKey: ['bank-list'],
    queryFn: queryFn,
    refetchOnReconnect: false,
    refetchOnWindowFocus: false,
  })

  return { data, refetch, isLoading, isError, error }
}

export const useCreateWallet = () => {
  const mutationFn = async (payload: createWalletType) => {
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
