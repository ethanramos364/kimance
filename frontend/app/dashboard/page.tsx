import { createClient } from '@/lib/supabase/server'
import { redirect } from 'next/navigation'
import LogoutButton from '@/components/auth/LogoutButton'

export default async function DashboardPage() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  if (!user) {
    redirect('/login')
  }

  const userName = user.user_metadata?.full_name || user.email?.split('@')[0] || 'User'

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <h1 className="text-xl font-bold text-kimance-dark">
              <span className="text-kimance-primary">K</span>imance
            </h1>
            <div className="flex items-center gap-4">
              <span className="text-sm text-gray-600">{user.email}</span>
              <LogoutButton />
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Card */}
        <div className="bg-white rounded-2xl shadow-sm p-6 mb-6">
          <h2 className="text-2xl font-bold text-gray-800">
            Welcome back, {userName}! 👋
          </h2>
          <p className="text-gray-500 mt-1">
            Manage your global money transfers from here.
          </p>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <QuickActionCard
            title="Send Money"
            description="Transfer funds globally"
            icon="💸"
            color="bg-blue-50 text-blue-600"
          />
          <QuickActionCard
            title="Kimance Wallet"
            description="View your balance"
            icon="👛"
            color="bg-green-50 text-green-600"
          />
          <QuickActionCard
            title="Transaction History"
            description="View past transfers"
            icon="📋"
            color="bg-purple-50 text-purple-600"
          />
        </div>

        {/* Account Info */}
        <div className="bg-white rounded-2xl shadow-sm p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Account Details</h3>
          <div className="space-y-3">
            <InfoRow label="Email" value={user.email || 'N/A'} />
            <InfoRow label="User ID" value={user.id.slice(0, 8) + '...'} />
            <InfoRow 
              label="Account Created" 
              value={new Date(user.created_at).toLocaleDateString()} 
            />
            <InfoRow 
              label="Email Verified" 
              value={user.email_confirmed_at ? '✅ Yes' : '❌ No'} 
            />
          </div>
        </div>
      </main>
    </div>
  )
}

function QuickActionCard({ 
  title, 
  description, 
  icon, 
  color 
}: { 
  title: string
  description: string
  icon: string
  color: string
}) {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow cursor-pointer">
      <div className={`w-12 h-12 rounded-lg ${color} flex items-center justify-center text-2xl mb-4`}>
        {icon}
      </div>
      <h3 className="font-semibold text-gray-800">{title}</h3>
      <p className="text-sm text-gray-500">{description}</p>
    </div>
  )
}

function InfoRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between py-2 border-b border-gray-100">
      <span className="text-gray-500">{label}</span>
      <span className="text-gray-800 font-medium">{value}</span>
    </div>
  )
}
