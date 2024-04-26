'use client'

import { create } from 'zustand'

interface BalanceState {
  loading: boolean
  balance: number
  error: string | null
  hideBalance: boolean
  setLoading: (loading: boolean) => void
  setBalance: (balance: number) => void
  setError: (error: string | null) => void
  setHideBalance: (hideBalance: boolean) => void
  handleRefresh: () => void
}

const useBalanceStore = create<BalanceState>((set) => ({
  loading: false,
  balance: 10000,
  error: null,
  hideBalance: false,
  setLoading: (loading) => set({ loading }),
  setBalance: (balance) => set({ balance }),
  setError: (error) => set({ error }),
  setHideBalance: (hideBalance) => set({ hideBalance }),
  handleRefresh: () => {
    set({ loading: true })
    setTimeout(() => {
      set({ balance: Math.floor(Math.random() * 100000), loading: false })
    }, 1000)
  },
}))

const Balance = () => {
  const { loading, balance, hideBalance, handleRefresh, setHideBalance } =
    useBalanceStore()
  return (
    <div className="d-flex mb-3 mb-lg-2">
      <div className="tw-bg-white border border-gray-300 border-dashed rounded w-100 py-2 px-4">
        <span className="fs-6 text-gray-500 fw-bold tw-flex tw-justify-between tw-items-center">
          Balance{' '}
          <i
            onClick={handleRefresh}
            className={`ki-duotone ki-arrows-circle fs-2 tw-cursor-pointer ${loading ? 'tw-animate-spin' : ''}`}
          >
            <span className="path1"></span>
            <span className="path2"></span>
          </i>
        </span>
        {loading ? (
          <div className="fs-2x fw-bold">- - - -</div>
        ) : (
          <div className="d-flex tw-justify-between tw-items-center">
            <div className="fs-2x fw-bold text-success">
              {hideBalance ? '****' : `₦${balance.toLocaleString()}`}
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
  const { balance, loading } = useBalanceStore()

  return (
    <div>
      {loading ? (
        <>Loading...</>
      ) : (
        <span>Balance: ₦{balance.toLocaleString()}</span>
      )}
    </div>
  )
}

export { Balance, SubBalance, useBalanceStore }
