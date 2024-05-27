import axios from 'axios'
import { baseUrl, config } from './api'
import { useMutation, useQuery } from '@tanstack/react-query'
import {
  AirtimeTransferType,
  DataTransferType,
  TvTransferType,
} from '@/lib/Validations/bills'

export const useGetBillsProvider = () => {
  const queryFn = async () => {
    return await axios.get(`${baseUrl}/services/bill-providers/list`, config)
  }
  const { data, refetch, isLoading, isError, error } = useQuery({
    queryKey: ['bills-list'],
    queryFn: queryFn,
    refetchOnReconnect: false,
    refetchOnWindowFocus: false,
  })

  return { data, refetch, isLoading, isError, error }
}

export const useAirtimeTransfer = () => {
  const mutationFn = async (payload: AirtimeTransferType) => {
    const data = payload

    return await axios.post(
      `${baseUrl}/services/airtime-vtu/transactions/create`,
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

export const useGetAirtimeList = () => {
  const queryFn = async () => {
    return await axios.get(
      `${baseUrl}/services/airtime-vtu/transactions/list`,
      config
    )
  }
  const { data, refetch, isLoading, isError, error } = useQuery({
    queryKey: ['airtime-list'],
    queryFn: queryFn,
    refetchOnReconnect: false,
    refetchOnWindowFocus: false,
  })

  return { data, refetch, isLoading, isError, error }
}

export const useDataTransfer = () => {
  const mutationFn = async (payload: DataTransferType) => {
    const data = payload

    return await axios.post(
      `${baseUrl}/services/mobile-data/transactions/create`,
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

export const useDataPlanList = () => {
  const mutationFn = async (payload: { product: string }) => {
    const data = payload

    return await axios.post(
      `${baseUrl}/services/mobile-data/plans/list`,
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
export const useCablePlanList = () => {
  const mutationFn = async (payload: { product: string }) => {
    const data = payload

    return await axios.post(
      `${baseUrl}/services/cable/plans/list`,
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

export const useCableTransfer = () => {
  const mutationFn = async (payload: TvTransferType) => {
    const data = payload

    return await axios.post(
      `${baseUrl}/services/cable/transactions/create`,
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

export const useVerifyCableDevice = () => {
  const mutationFn = async (payload: {
    product: string
    device_number: string
  }) => {
    const data = payload

    return await axios.post(
      `${baseUrl}/services/cable/verify-device`,
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
