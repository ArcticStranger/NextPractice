import type { ReactNode } from 'react'
import { Sidebar } from '@/components/layout/sidebar'

interface DashboardLayoutProps {
  children: ReactNode
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className='m-4 flex min-h-[calc(100vh-2rem)] flex-row overflow-hidden rounded-xl border-4 border-blue-500'>
      <Sidebar />
      <main className='flex flex-1 flex-col bg-white p-8'>{children}</main>
    </div>
  )
}
