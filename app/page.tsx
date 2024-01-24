import Link from 'next/link'

async function Home() {
	return (
		<main className='sm:p-16 py-16 px-8 flex flex-col gap-10'>
			
				<Link className='cursor-pointer text-3xl text-white font-bold' href={'/animes'}>
					Go to anime page
				</Link>
	
		</main>
	)
}

export default Home
