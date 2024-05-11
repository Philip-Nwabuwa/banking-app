'use client'

import useAuthRedirect from '@/hooks/useAuthRedirect'

const Home = () => {
  useAuthRedirect('/login')
}

export default Home
