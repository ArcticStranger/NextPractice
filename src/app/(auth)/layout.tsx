import type { ReactNode } from 'react'

interface AuthLayoutProps {
  children: ReactNode
}

export default function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <div className="bg-[radial-gradient(circle_at_center, var(--tw-gradient-stops))] flex min-h-screen items-center justify-center bg-zinc-950 from-zinc-900 via-zinc-950 to-black">
      <div className="w-full max-w-md rounded-[2.5rem] border border-zinc-800 bg-zinc-900/50 p-10 shadow-2xl backdrop-blur-sm">
        <header className="mb-8 text-center">
          <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-white">
            <div className="h-6 w-6 rounded-full border-4 border-black" />
          </div>
          <h2 className="text-xl font-bold tracking-tight text-white">
            Welcome back
          </h2>
          <p className="mt-1 text-sm text-zinc-500">
            Enter your details to continue
          </p>
        </header>

        {children}

        <footer className="mt-8 text-center text-[10px] tracking-widest text-zinc-600 uppercase">
          Secure Authentication System
        </footer>
      </div>
    </div>
  )
}
