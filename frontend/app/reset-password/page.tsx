import Link from 'next/link'
import ResetPasswordForm from '@/components/auth/ResetPasswordForm'

export default function ResetPasswordPage() {
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
          <h2 className="text-xl font-semibold text-gray-800 mt-4">Set new password</h2>
          <p className="text-gray-500 text-sm mt-1">Enter your new password below</p>
        </div>

        {/* Form */}
        <ResetPasswordForm />
      </div>
    </main>
  )
}
