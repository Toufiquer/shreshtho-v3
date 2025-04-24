'use client'

// hooks/useAuthCheck.ts
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useAuthStore } from './useZustandAuth'

export function useAuthCheck(requireAuth: boolean) {
  const router = useRouter()
  const email = useAuthStore((state) => state.email)

  useEffect(() => {
    // If auth is required but no email exists, redirect to login
    if (requireAuth && !email) {
      router.push('/sample-users')
    }

    // If already authenticated and on login page, redirect to dashboard
    if (!requireAuth && email) {
      router.push('/dashboard')
    }
  }, [email, requireAuth, router])

  return { isAuthenticated: !!email }
}
