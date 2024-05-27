'use client'

import { useGetBalance } from '@/services/wallet'
import { create } from 'zustand'

interface HideBalanceState {
  hideBalance: boolean
  setHideBalance: (hideBalance: boolean) => void
}

const useHideBalance = create<HideBalanceState>((set) => {
  const localStorageAvailable = typeof localStorage !== 'undefined'

  const storedHideBalance = localStorageAvailable
    ? localStorage.getItem('hideBalance')
    : null
  const initialHideBalance = storedHideBalance
    ? JSON.parse(storedHideBalance)
    : false

  return {
    hideBalance: initialHideBalance,
    setHideBalance: (hideBalance) => {
      if (localStorageAvailable) {
        localStorage.setItem('hideBalance', JSON.stringify(hideBalance))
      }
      set({ hideBalance })
    },
  }
})

const Balance = () => {
  const { data, isLoading, refetch, isError, error } = useGetBalance()

  let symbol = ''
  let balance = 0
  if (data) {
    balance = data?.data.data.balances.available
    const symbolCode = data?.data?.data?.currency?.symbol || 'NGN'
    symbol = symbolCode
      ? String.fromCharCode(parseInt(symbolCode.substring(2), 16))
      : ''
  }

  const { hideBalance, setHideBalance } = useHideBalance()
  return (
    <div className="d-flex mb-3 mb-lg-6">
      <div className="tw-bg-white border border-gray-300 border-dashed rounded w-100 py-2 px-4">
        <span className="fs-6 text-gray-500 fw-bold tw-flex tw-justify-between tw-items-center">
          Balance{' '}
          <i
            onClick={() => {
              refetch()
            }}
            className={`ki-duotone ki-arrows-circle fs-2 tw-cursor-pointer ${isLoading ? 'tw-animate-spin' : ''}`}
          >
            <span className="path1"></span>
            <span className="path2"></span>
          </i>
        </span>
        {isLoading ? (
          <div className="fs-2x fw-bold">
            <i className="ki-solid ki-loading fs-2 tw-animate-spin"></i>
          </div>
        ) : (
          <div className="d-flex tw-justify-between tw-items-center">
            <div>
              {isError ? (
                <span className="text-danger">
                  Balance information not available, please refresh.
                </span>
              ) : (
                <span className="fs-2x fw-bold text-success">
                  {hideBalance
                    ? '****'
                    : `${symbol}${balance.toLocaleString()}`}
                </span>
              )}
            </div>
            <i
              onClick={() => setHideBalance(!hideBalance)}
              className={`ki-duotone ki-${hideBalance ? 'eye' : 'eye-slash'} fs-2 tw-cursor-pointer`}
            >
              {hideBalance ? (
                <>
                  <span className="path1"></span>
                  <span className="path2"></span>
                  <span className="path3"></span>
                  <span className="path4"></span>
                </>
              ) : (
                <>
                  <span className="path1"></span>
                  <span className="path2"></span>
                  <span className="path3"></span>
                </>
              )}
            </i>
          </div>
        )}
      </div>
    </div>
  )
}

const SubBalance = () => {
  const { data, isLoading } = useGetBalance()
  let symbol = ''
  let balance = 0
  if (data) {
    balance = data?.data.data.balances.available
    const symbolCode = data?.data?.data?.currency?.symbol || 'NGN'
    symbol = symbolCode
      ? String.fromCharCode(parseInt(symbolCode.substring(2), 16))
      : ''
  }
  return (
    <div>
      {isLoading ? (
        <>Loading...</>
      ) : (
        <span>
          Balance: {symbol}
          {balance.toLocaleString()}
        </span>
      )}
    </div>
  )
}

export { Balance, SubBalance, useHideBalance }
