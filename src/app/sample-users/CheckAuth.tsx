'use client'

import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { useAuthStore } from './useZustandAuth'

/*
|-----------------------------------------
| setting up CheckAuth for the App
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: shreshtho-v3, April, 2025
|-----------------------------------------
*/
const CheckAuth = () => {
  const { email } = useAuthStore()
  const router = useRouter()
  const [isChecking, setIsChecking] = useState(true)

  useEffect(() => {
    if (isChecking) {
      // Only redirect once
      setIsChecking(false)

      // Redirect based on authentication status
      if (email) {
        router.push('/dashboard')
      } else {
        router.push('/sample-users')
      }
    }
  }, [email, router, isChecking])

  // Return a minimal loading state while redirecting
  return (
    <main className="flex items-center justify-center min-h-screen">
      <div>Verifying user...</div>
    </main>
  )
}

export default CheckAuth
