'use client'
import Link from 'next/link'
import { useAuthStore } from '../sample-users/useZustandAuth'

const TopBar: React.FC = () => {
  const { email, role, clearAuth } = useAuthStore()
  return (
    <div className="flex items-center justify-between p-2 bg-gray-700 shadow-sm text-slate-300">
      <Link href="/" className="px-4 py-2 text-slate-400 hover:text-slate-200">
        Home
      </Link>
      {email ? (
        <div className="flex items-center gap-4">
          <span>
            <strong>Email:</strong> {email}
          </span>
          <span>
            <strong>Role:</strong> {role}
          </span>
          <button
            onClick={clearAuth}
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
          >
            Logout
          </button>
        </div>
      ) : (
        <span>Not logged in</span>
      )}
    </div>
  )
}

export default TopBar
