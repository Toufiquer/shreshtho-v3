/*
|-----------------------------------------
| setting up Page for the App
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: shreshtho-v3, April, 2025
|-----------------------------------------
*/

'use client'

import { useRouter } from 'next/navigation'
import { useAuthStore } from '../sample-users/useZustandAuth'
import SiteNavLayoutResizable from './site-nav-layout-resizable'
import TopBar from './TopBar'
import { useEffect, useState } from 'react'

const Page = () => {
  const { email } = useAuthStore()
  const router = useRouter()
  const [isLoaded, setIsLoaded] = useState(true)
  useEffect(() => {
    email && setIsLoaded(false)
  }, [])
  if (isLoaded) {
    return (
      <main>
        <TopBar />
        <SiteNavLayoutResizable />
      </main>
    )
  } else {
    router.push('/sample-users')
  }
}
export default Page
