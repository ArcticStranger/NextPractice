'use client'

interface DashboardErrorProps {
  error: Error & { digest?: string }
  reset: () => void
}

export default function DashboardError({ error, reset }: DashboardErrorProps) {
  return (
    <div className="rounded-lg border-2 border-red-500 bg-red-50 p-4 text-red-700">
      <h2 className="text-lg font-bold">В дашборде произошел сбой</h2>
      <p className="my-2 font-mono text-sm">{error.message}</p>
      <button
        onClick={() => reset()}
        className="mt-2 rounded-md bg-red-600 px-4 py-2 text-sm text-white hover:bg-red-700"
      >
        Попробовать снова
      </button>
    </div>
  )
}
