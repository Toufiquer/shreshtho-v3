import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

// Define the type for our store state
interface AuthState {
  email: string | null
  role: string | null
  expire: number | null
  token: string | null
  signBy: string | null

  // Actions
  setAuth: (auth: Omit<AuthState, 'setAuth' | 'clearAuth'>) => void
  clearAuth: () => void
}

// Create store with persistence
export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      // Initial state
      email: null,
      role: null,
      expire: null,
      token: null,
      signBy: null,

      // Actions
      setAuth: (auth) =>
        set({
          email: auth.email,
          role: auth.role,
          expire: auth.expire,
          token: auth.token,
          signBy: auth.signBy,
        }),

      clearAuth: () =>
        set({
          email: null,
          role: null,
          expire: null,
          token: null,
          signBy: null,
        }),
    }),
    {
      name: 'auth-storage', // name of the item in storage
      storage: createJSONStorage(() => localStorage), // use localStorage by default
    }
  )
)

// Example usage:
//
// // To set authentication data
// useAuthStore.getState().setAuth({
//   email: 'user@example.com',
//   role: 'admin',
//   expire: Date.now() + 3600000, // 1 hour from now
//   token: 'jwt-token-here',
//   signBy: 'oauth-provider'
// });
//
// // To access state
// const { email, role, token } = useAuthStore.getState();
//
// // To clear authentication
// useAuthStore.getState().clearAuth();
