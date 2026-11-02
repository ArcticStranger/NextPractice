'use client'

import { useState, type ReactNode } from 'react'
import Link from 'next/link'

interface DashboardLayoutProps {
  children: ReactNode
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  const [text, setText] = useState('')

  return (
    <div className="m-4 flex min-h-[calc(100vh-2rem)] flex-row overflow-hidden rounded-xl border-4 border-blue-500">
      <aside className="flex w-64 flex-col border-r border-blue-100 bg-blue-50 p-6">
        <div className="mb-8 font-sans text-xs font-bold tracking-widest text-blue-500 uppercase">
          Dashboard Layout
        </div>
        <nav className="flex flex-col gap-4">
          <span className="text-sm font-bold text-zinc-400">Навигация</span>
          <Link
            href="/dashboard"
            className="transition-colors hover:text-blue-600"
          >
            Главная
          </Link>
          <Link
            href="/dashboard/settings"
            className="transition-colors hover:text-blue-600"
          >
            Настройки
          </Link>
        </nav>

        <div className="mt-auto border-t border-blue-200 pt-6">
          <label className="mb-2 block text-[10px] font-bold text-blue-400 uppercase">
            Persistent State (Layout)
          </label>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Текст сохранится..."
            className="outline-non w-full rounded border border-blue-200 bg-white p-2 text-sm text-black focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </aside>
      <main className="flex flex-1 flex-col bg-white p-8">{children}</main>
    </div>
  )
}
