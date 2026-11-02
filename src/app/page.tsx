import Link from 'next/link'

export const CARS = [
  { id: '1', name: 'Porsche 911' },
  { id: '2', name: 'Aston Martin DB12' },
  { id: '3', name: 'Audi RS6' },
]
export default function Home() {
  return (
    <main className="min-h-screen bg-black p-10">
      <h1 className="mb-10 text-3xl font-black text-white uppercase italic">
        The Garage
      </h1>
      <div className="flex gap-4">
        {CARS.map((car) => (
          <Link
            key={car.id}
            href={`/photo/${car.id}`}
            className="rounded-xl border border-zinc-800 bg-zinc-900 p-6 text-white transition-all hover:border-blue-500"
          >
            {car.name}
          </Link>
        ))}
      </div>
    </main>
  )
}
