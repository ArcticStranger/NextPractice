import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center p-10 text-center">
      <h1 className="mb-4 text-6xl font-black text-zinc-200">404</h1>
      <h2 className="mb-2 text-2xl font-bold text-black">
        Страница не найдена
      </h2>
      <p className="mb-8 max-w-sm text-zinc-500">
        Похоже, вы зашли куда-то не туда. Этой страницы не существует или она
        быыла перемещена.
      </p>
      <Link
        href="/"
        className="rounded-full bg-black px-6 py-3 font-medium text-white transition-all hover:bg-zinc-800"
      >
        Вернуться на главную
      </Link>
    </div>
  )
}
