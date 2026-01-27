import Link from 'next/link'
import LoginForm from '@/components/auth/LoginForm'

export default function LoginPage() {
  return (
    <main className="auth-container">
      <div className="auth-card">
        {/* Header */}
        <div className="text-center mb-8">
          <Link href="/" className="inline-block">
            <h1 className="text-2xl font-bold text-kimance-dark">
              <span className="text-kimance-primary">K</span>imance
            </h1>
          </Link>
          <h2 className="text-xl font-semibold text-gray-800 mt-4">Welcome back</h2>
          <p className="text-gray-500 text-sm mt-1">Sign in to your account</p>
        </div>

        {/* Login Form */}
        <LoginForm />

        {/* Footer */}
        <div className="mt-6 text-center text-sm">
          <span className="text-gray-500">Don't have an account? </span>
          <Link href="/signup" className="text-kimance-primary font-medium hover:underline">
            Sign up
          </Link>
        </div>
      </div>
    </main>
  )
}
