'use client'

import { useState } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { ServiceUsersList } from '@/components/users-list'

export function BadComponent() {
  const [text, setText] = useState('')

  const pathname = usePathname()

  const menuItems = [
    {
      name: 'Главная',
      href: '/dashboard'
    },
    {
      name: 'Настройки',
      href: '/dashboard/settings'
    },
    {
      name: 'Аналитика',
      href: '/dashboard/analytics'
    }
  ]

  return (
    <main>
      <aside className='flex w-64 flex-col border-r border-blue-100 bg-blue-50 p-6'>
        <div className='mb-8 font-sans text-xs font-bold tracking-widest text-blue-500 uppercase'>
          Dashboard Layout
        </div>
        <nav className='flex flex-col gap-4'>
          <span className='text-sm font-bold text-zinc-400'>Навигация</span>
          {menuItems.map((item, index) => {
            const isActive = pathname === item.href

            return (
              <Link
                key={index}
                href={item.href}
                className={`transition-colors ${
                  isActive
                    ? 'text-blue-600 font-semibold'
                    : 'hover:text-zinc-400 text-zinc-700'
                }`}
              >
                {item.name}
              </Link>
            )
          })}
        </nav>

        <div className='mt-auto border-t border-blue-200 pt-6'>
          <label className='mb-2 block text-[10px] font-bold text-blue-400 uppercase'>
            Persistent State (Layout)
          </label>
          <input
            type='text'
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder='Текст сохранится...'
            className='outline-non w-full rounded border border-blue-200 bg-white p-2 text-sm text-black focus:ring-2 focus:ring-blue-500'
          />
        </div>
      </aside>

      <div>
        <ServiceUsersList />
      </div>
    </main>
  )
}
