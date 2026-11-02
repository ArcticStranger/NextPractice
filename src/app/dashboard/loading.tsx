export default function DashboardLoading() {
  return (
    <div className="flex w-full animate-pulse space-x-4 rounded-lg bg-zinc-100 p-4">
      <div className="flex-1 space-y-4 py-1">
        <div className="w-3/4 rounded bg-zinc-300">
          <div className="space-y-2">
            <div className="n-4 rounded bg-zinc-300" />
            <div className="n-4 w-5/6 rounded bg-zinc-300" />
            <p>Loading...</p>
          </div>
        </div>
      </div>
    </div>
  )
}
