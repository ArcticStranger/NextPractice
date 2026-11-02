interface PhotoPageProps {
  params: Promise<{ id: string }>
}

export default async function PhotoPage({params}: PhotoPageProps) {
    const {id} = await params;

    return (
      <main className='flex min-h-screen flex-col items-center justify-center bg-white text-black'>
        <h1 className='text-5xl font-black uppercase italic'>
          Full Page View
        </h1>
        <p className='mt-4 text-zinc-500'>Вы смотрите объект с ID: {id}</p>
      </main>
    )
} 