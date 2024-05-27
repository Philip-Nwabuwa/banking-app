import axios from 'axios'
import { baseUrl, config } from './api'
import { useMutation, useQuery } from '@tanstack/react-query'
import { VerifyBankType, BankTransferType } from '@/lib/Validations/transfer'
import {
  createSettlementType,
  createWalletType,
} from '@/lib/Validations/wallet'

export const useGetBalance = () => {
  const queryFn = async () => {
    return await axios.get(`${baseUrl}/wallet/balance`, config)
  }
  const { data, refetch, isLoading, isError, error } = useQuery({
    queryKey: ['balance'],
    queryFn: queryFn,
    refetchOnReconnect: true,
    refetchOnWindowFocus: false,
  })

  return { data, refetch, isLoading, isError, error }
}

export const useBankList = () => {
  const queryFn = async () => {
    return await axios.get(
      `${baseUrl}/services/bank-transfer/list-banks`,
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

export const useBankTransactionsList = () => {
  const queryFn = async () => {
    return await axios.get(
      `${baseUrl}/services/bank-transfer/transactions/list`,
      config
    )
  }
  const { data, refetch, isLoading, isError, error } = useQuery({
    queryKey: ['bank-transactions-list'],
    queryFn: queryFn,
    refetchOnReconnect: false,
    refetchOnWindowFocus: false,
  })

  return { data, refetch, isLoading, isError, error }
}
export const usePaytonicTransactionsList = () => {
  const queryFn = async () => {
    return await axios.get(
      `${baseUrl}/services/p2p-transfer/transactions/list`,
      config
    )
  }
  const { data, refetch, isLoading, isError, error } = useQuery({
    queryKey: ['paytonic-transactions-list'],
    queryFn: queryFn,
    refetchOnReconnect: false,
    refetchOnWindowFocus: false,
  })

  return { data, refetch, isLoading, isError, error }
}

export const useCreateWallet = () => {
  const mutationFn = async (payload: createWalletType) => {
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

export const useVerifyAccount = () => {
  const mutationFn = async (payload: VerifyBankType) => {
    const data = payload

    return await axios.post(
      `${baseUrl}/services/bank-transfer/verify-account`,
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
export const useBankTransfer = () => {
  const mutationFn = async (payload: BankTransferType) => {
    const data = payload

    return await axios.post(
      `${baseUrl}/services/bank-transfer/transactions/create`,
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

  return {
    mutate,
    mutateAsync,
    isLoading,
    data,
  }
}

export const useCreateSettellmentAccount = () => {
  const mutationFn = async (payload: createSettlementType) => {
    const data = payload

    return await axios.post(`${baseUrl}/withdrawal/account/add`, data, config)
  }
  const {
    mutate,
    mutateAsync,
    isPending: isLoading,
    data,
  } = useMutation({ mutationFn: mutationFn })

  return {
    mutate,
    mutateAsync,
    isLoading,
    data,
  }
}

export const useGetStatement = () => {
  const queryFn = async () => {
    return await axios.get(`${baseUrl}/wallet/statement`, config)
  }
  const { data, refetch, isLoading, isError, error } = useQuery({
    queryKey: ['statement-list'],
    queryFn: queryFn,
    refetchOnReconnect: false,
    refetchOnWindowFocus: false,
  })

  return { data, refetch, isLoading, isError, error }
}
