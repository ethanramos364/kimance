'use client'

import { logout } from '@/app/auth/actions'

export default function LogoutButton() {
  return (
    <form action={logout}>
      <button
        type="submit"
        className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-800 
                   bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
      >
        Sign out
      </button>
    </form>
  )
}
