/*
|-----------------------------------------
| setting up Page for the App
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: shreshtho-v3, April, 2025
|-----------------------------------------
*/

'use client'

import { useAuthCheck } from '../sample-users/useAuthCheck'
import SiteNavLayoutResizable from './site-nav-layout-resizable'
import TopBar from './TopBar'

const Page = () => {
  const { isAuthenticated } = useAuthCheck(true)

  // Optional loading state while checking auth
  if (typeof window !== 'undefined' && !isAuthenticated) {
    return <div>Loading...</div>
  }
  return (
    <main>
      <TopBar />
      <SiteNavLayoutResizable />
    </main>
  )
}
export default Page
