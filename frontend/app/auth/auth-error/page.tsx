import Link from 'next/link'

export default function AuthError() {
  return (
    <main className="auth-container">
      <div className="auth-card text-center">
        <div className="mb-6">
          <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </div>
          <h1 className="text-2xl font-bold text-gray-800">Authentication Error</h1>
        </div>
        
        <p className="text-gray-600 mb-6">
          Something went wrong during authentication. The link may have expired or already been used.
        </p>

        <div className="space-y-3">
          <Link href="/login" className="btn-primary block text-center">
            Back to Login
          </Link>
          <Link href="/signup" className="btn-secondary block text-center">
            Create Account
          </Link>
        </div>
      </div>
    </main>
  )
}
