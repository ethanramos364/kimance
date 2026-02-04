import Link from 'next/link'
import { createClient } from '@/lib/supabase/server'
import { redirect } from 'next/navigation'

export default async function Home() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  if (user) {
    redirect('/dashboard')
  }

  return (
    <main className="auth-container">
      <div className="auth-card text-center">
        {/* Logo */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-kimance-dark">
            <span className="text-kimance-primary">K</span>imance
          </h1>
          <p className="text-gray-500 mt-2">Global Money Transfer</p>
        </div>

        {/* Tagline */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            Send Money Worldwide
          </h2>
          <p className="text-gray-600 text-sm">
            Fast, secure transfers to Africa, USA, Canada, and Europe.
            <br />
            Mobile Money • Bank Deposits • Crypto
          </p>
        </div>

        {/* CTAs */}
        <div className="space-y-3">
          <Link href="/signup" className="btn-primary block text-center">
            Get Started
          </Link>
          <Link href="/login" className="btn-secondary block text-center">
            Sign In
          </Link>
        </div>

        {/* Footer */}
        <p className="mt-8 text-xs text-gray-400">
          Secure • Compliant • Global
        </p>
      </div>
    </main>
  )
}
