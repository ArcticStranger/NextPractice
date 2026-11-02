interface ShopPageProps {
  params: Promise<{ slug: string[] }>
}

export default async function ShopPage({ params }: ShopPageProps) {
  const { slug } = await params

  const currentSlug = slug || []
  const [category, brand, model] = currentSlug

  return (
    <div className="min-h-screen bg-white p-10 font-sans">
      <header className="mb-10">
        <h1 className="text-4xl font-black tracking-tighter uppercase italic">
          {category ? `Catalog / ${category}` : 'Main Store'}
        </h1>
        <p className="font-meidum mt-2 text-zinc-400">
          {brand ? `Exploring ${brand} collection` : 'Browse all our products'}
        </p>
      </header>
      <nav className="mb-8 flex items-center gap-2">
        <span className="font-medium text-zinc-900">Shop</span>

        {currentSlug.map((s, i) => (
          <div key={i} className="flex items-center gap-3">
            <span className="text-zinc-300">/</span>
            <span className="text-zinc-500 capitalize">{s}</span>
          </div>
        ))}
      </nav>

      <div className="grid grid-cols-1 gap-6">
        {!category && (
          <div className="rounded-[3rem] bg-black p-20 text-center text-white">
            <h2 className="text-3xl font-bold">Добро пожаловать в магазин!</h2>
            <p className="mt-2 opacity-50">
              Выберите категорию выше, чтобы начать.
            </p>
          </div>
        )}

        {category && (
          <div className="rounded-4xl border border-zinc-200 bg-white p-8 shadow-sm">
            <p className="font-mono text-xs font-bold text-blue-500 uppercase">
              Active Filter
            </p>
            f
            <div className="mt-4 space-y-2">
              <p>
                <strong>Category.</strong> {category}
              </p>
              {brand && (
                <p>
                  <strong>Brand.</strong> {brand}
                </p>
              )}
              {model && (
                <p>
                  <strong>Model.</strong> {model}
                </p>
              )}
            </div>
          </div>
        )}
      </div>
      <div className="mt-10 rounded-xl bg-zinc-200/50 p-4 font-mono text-[10px] text-zinc-500">
        DEBUG: slug_state = {JSON.stringify(currentSlug)}
      </div>
    </div>
  )
}
