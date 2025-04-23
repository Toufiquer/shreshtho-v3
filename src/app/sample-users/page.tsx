'use client'

// pages/index.tsx
import { useState, useEffect } from 'react'
import { useAuthStore } from './useZustandAuth'
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import CheckAuth from './CheckAuth'

interface User {
  name: string
  role: string
  email: string
}

interface UserGroup {
  title: string
  users: User[]
}

export default function Home() {
  const { email, role, setAuth, clearAuth } = useAuthStore()
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  const userGroups: UserGroup[] = [
    {
      title: 'Web Management',
      users: [
        { name: 'User1', role: 'web-admin', email: 'web-admin@example.com' },
        {
          name: 'User2',
          role: 'web-moderator',
          email: 'web-moderator@example.com',
        },
        {
          name: 'User3',
          role: 'web-instructor',
          email: 'web-instructor@example.com',
        },
      ],
    },
    {
      title: 'Store Management',
      users: [
        {
          name: 'User1',
          role: 'store-admin',
          email: 'store-admin@example.com',
        },
        {
          name: 'User2',
          role: 'store-moderator',
          email: 'store-moderator@example.com',
        },
        {
          name: 'User3',
          role: 'store-instructor',
          email: 'store-instructor@example.com',
        },
      ],
    },
    {
      title: 'Normal User',
      users: [{ name: 'User1', role: 'user', email: 'user@example.com' }],
    },
  ]

  const handleLogin = (user: User) => {
    setAuth({
      email: user.email,
      role: user.role,
      expire: Date.now() + 3600000, // 1 hour from now
      token: `mock-token-for-${user.role}-${Date.now()}`,
      signBy: 'debug-login',
    })
  }

  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>Debug Login Page</title>
        <meta
          name="description"
          content="One-click login for testing and debugging"
        />
      </Head>
      <div className="w-full flex items-center justify-start gap-4 mb-6">
        <Link href="/" className="mr-4">
          Home
        </Link>
        <h1 className="text-2xl font-bold">Debug Login Page</h1>
      </div>

      {isClient && (
        <div className="mb-6 p-4 bg-gray-100 rounded-md">
          <h2 className="text-lg font-semibold mb-2">Current Auth State:</h2>
          {email ? (
            <div>
              <p>
                <strong>Email:</strong> {email}
              </p>
              <p>
                <strong>Role:</strong> {role}
              </p>
              <button
                onClick={clearAuth}
                className="mt-2 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
              >
                Logout
              </button>
            </div>
          ) : (
            <p>Not logged in</p>
          )}
        </div>
      )}

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {userGroups.map((group) => (
          <div key={group.title} className="border rounded-lg p-4">
            <h2 className="text-xl font-bold mb-4">{group.title}</h2>
            <div className="space-y-4">
              {group.users.map((user) => (
                <div key={user.role} className="p-3 bg-gray-50 rounded">
                  <div className="mb-2">
                    <p>
                      <strong>{user.name}:</strong> {user.role}
                    </p>
                    <p className="text-sm text-gray-600">{user.email}</p>
                  </div>
                  <button
                    onClick={() => handleLogin(user)}
                    className="w-full px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                  >
                    Login as {user.role}
                  </button>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
