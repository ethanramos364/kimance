import Link from 'next/link'
import ForgotPasswordForm from '@/components/auth/ForgotPasswordForm'

export default function ForgotPasswordPage() {
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
          <h2 className="text-xl font-semibold text-gray-800 mt-4">Reset your password</h2>
          <p className="text-gray-500 text-sm mt-1">We'll send you a reset link</p>
        </div>

        {/* Form */}
        <ForgotPasswordForm />

        {/* Footer */}
        <div className="mt-6 text-center text-sm">
          <Link href="/login" className="text-kimance-primary font-medium hover:underline">
            ← Back to login
          </Link>
        </div>
      </div>
    </main>
  )
}
