'use client'

import { useState, useEffect, type ReactNode } from 'react'
import Link from 'next/link'

interface DashboardTemplateProps {
  children: ReactNode
}

export default function DashboardTemplate({
  children,
}: DashboardTemplateProps) {
  const [text, setText] = useState('')

  useEffect(() => {
    console.log('Template: Монтирование (Произошла навигация)')
  }, [])

  return (
    <div className="animate-in fade-in slide-in-from-bottom-2 flex flex-1 flex-col rounded-lg border-4 border-dashed border-purple-400 p-6 duration-500">
      <div className="items-centner mb-6 flex justify-between">
        <div className="text-xs font-bold tracking-widest text-purple-400 uppercase">
          Dashboard Template
        </div>

        <div className="flex flex-col items-end">
          <label className="mb-2 block text-[10px] font-bold text-purple-300 uppercase">
            Volatile State (Template)
          </label>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Текст сбросится при переходе..."
            className="w-64 rounded border-2 border-purple-100 bg-white p-2 text-sm text-black outline-none focus:border-purple-400"
          />
        </div>
      </div>
      <div className="flex flex-1 flex-col">{children}</div>
    </div>
  )
}
