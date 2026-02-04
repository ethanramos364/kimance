import Link from 'next/link'
import SignupForm from '@/components/auth/SignupForm'

export default function SignupPage() {
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
          <h2 className="text-xl font-semibold text-gray-800 mt-4">Create your account</h2>
          <p className="text-gray-500 text-sm mt-1">Start sending money globally</p>
        </div>

        {/* Signup Form */}
        <SignupForm />

        {/* Footer */}
        <div className="mt-6 text-center text-sm">
          <span className="text-gray-500">Already have an account? </span>
          <Link href="/login" className="text-kimance-primary font-medium hover:underline">
            Sign in
          </Link>
        </div>
      </div>
    </main>
  )
}
