import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Kimance - Global Money Transfer',
  description: 'Fast, secure, and fully global money transfer solution',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
