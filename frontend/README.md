# Kimance Frontend - Authentication System

A complete authentication system for the Kimance Global Money Transfer platform built with Next.js 14 and Supabase.

## Features

- ✅ Email/Password Sign Up
- ✅ Email/Password Login
- ✅ Password Reset Flow
- ✅ Protected Routes (Dashboard)
- ✅ Session Management
- ✅ Auto-redirect (logged in users → dashboard, guests → login)
- ✅ Email Verification Support
- ✅ Clean, Fintech-style UI

## Quick Start

### 1. Install Dependencies

```bash
cd frontend
npm install
```

### 2. Configure Supabase

1. Go to [supabase.com](https://supabase.com) and create a new project
2. Copy `.env.local.example` to `.env.local`:
   ```bash
   cp .env.local.example .env.local
   ```
3. Fill in your Supabase credentials:
   ```
   NEXT_PUBLIC_SUPABASE_URL=https://your-project-id.supabase.co
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key-here
   NEXT_PUBLIC_SITE_URL=http://localhost:3000
   ```

### 3. Configure Supabase Auth Settings

In your Supabase Dashboard → Authentication → URL Configuration:

- **Site URL**: `http://localhost:3000` (or `https://secure.kimance.com` for production)
- **Redirect URLs**: 
  - `http://localhost:3000/auth/callback`
  - `https://secure.kimance.com/auth/callback`

### 4. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
frontend/
├── app/
│   ├── globals.css          # Global styles + Tailwind
│   ├── layout.tsx           # Root layout
│   ├── page.tsx             # Landing page
│   ├── login/page.tsx       # Login page
│   ├── signup/page.tsx      # Signup page
│   ├── forgot-password/page.tsx
│   ├── reset-password/page.tsx
│   ├── dashboard/page.tsx   # Protected dashboard
│   └── auth/
│       ├── actions.ts       # Server actions (login, signup, etc.)
│       ├── callback/route.ts # OAuth callback handler
│       └── auth-error/page.tsx
├── components/
│   └── auth/
│       ├── LoginForm.tsx
│       ├── SignupForm.tsx
│       ├── ForgotPasswordForm.tsx
│       ├── ResetPasswordForm.tsx
│       └── LogoutButton.tsx
├── lib/
│   └── supabase/
│       ├── client.ts        # Browser client
│       ├── server.ts        # Server client
│       └── middleware.ts    # Session refresh
├── middleware.ts            # Route protection
└── package.json
```

## Routes

| Route | Description | Protected |
|-------|-------------|-----------|
| `/` | Landing page | No |
| `/login` | Login page | No (redirects if logged in) |
| `/signup` | Registration page | No (redirects if logged in) |
| `/forgot-password` | Request password reset | No |
| `/reset-password` | Set new password | No |
| `/dashboard` | User dashboard | ✅ Yes |

## Production Deployment

For deployment to `secure.kimance.com`:

1. Update `.env.local`:
   ```
   NEXT_PUBLIC_SITE_URL=https://secure.kimance.com
   ```

2. Update Supabase Dashboard → Authentication → URL Configuration with production URLs

3. Build and deploy:
   ```bash
   npm run build
   npm start
   ```

## Adding More Protected Routes

Edit `lib/supabase/middleware.ts` to add more protected paths:

```typescript
const protectedPaths = ['/dashboard', '/account', '/settings', '/wallet']
```

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Auth**: Supabase Auth
- **Styling**: Tailwind CSS
- **Language**: TypeScript
