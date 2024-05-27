'use client'

import { create } from 'zustand'

const isClientSide = typeof window !== 'undefined'

interface UserState {
  userProfile: any
  userAccount: any
  userConfig: any
  userKyc: any
  userSetup: any
  setUserProfile: (profile: any) => void
  setUserAccount: (account: any) => void
  setUserConfig: (config: any) => void
  setUserKyc: (kyc: any) => void
  setUserSetup: (setup: any) => void
  clearUserData: () => void
}

const useUserStore = create<UserState>((set) => ({
  userProfile: isClientSide
    ? JSON.parse(localStorage.getItem('userProfile') || '{}')
    : {},
  userAccount: isClientSide
    ? JSON.parse(localStorage.getItem('userAccount') || '{}')
    : {},
  userConfig: isClientSide
    ? JSON.parse(localStorage.getItem('userConfig') || '{}')
    : {},
  userKyc: isClientSide
    ? JSON.parse(localStorage.getItem('userKyc') || '{}')
    : {},
  userSetup: isClientSide
    ? JSON.parse(localStorage.getItem('userSetup') || '{}')
    : {},

  setUserProfile: (profile) => {
    if (isClientSide) {
      localStorage.setItem('userProfile', JSON.stringify(profile))
    }
    set({ userProfile: profile })
  },

  setUserAccount: (account) => {
    if (isClientSide) {
      localStorage.setItem('userAccount', JSON.stringify(account))
    }
    set({ userAccount: account })
  },

  setUserConfig: (config) => {
    if (isClientSide) {
      localStorage.setItem('userConfig', JSON.stringify(config))
    }
    set({ userConfig: config })
  },

  setUserKyc: (kyc) => {
    if (isClientSide) {
      localStorage.setItem('userKyc', JSON.stringify(kyc))
    }
    set({ userKyc: kyc })
  },

  setUserSetup: (setup) => {
    if (isClientSide) {
      localStorage.setItem('userSetup', JSON.stringify(setup))
    }
    set({ userSetup: setup })
  },

  clearUserData: () => {
    if (isClientSide) {
      localStorage.removeItem('userProfile')
      localStorage.removeItem('userAccount')
      localStorage.removeItem('userConfig')
      localStorage.removeItem('userKyc')
      localStorage.removeItem('userSetup')
    }
    set({
      userProfile: {},
      userAccount: {},
      userConfig: {},
      userKyc: {},
      userSetup: {},
    })
  },
}))

export default useUserStore
