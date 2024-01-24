import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { redirect } from 'next/navigation'
import { fetchOneAnime } from '@/app/action';




interface ProductModalProps {
	id?: string
}

export const ProductModal = async ({ id }: ProductModalProps) => {
	if (!id || isNaN(parseInt(id, 10))) {
		redirect('/animes')
	}
const anime = await fetchOneAnime(id);


	return (
		<div className='fixed inset-0 flex items-center justify-center z-10'>
			<Link
				className='fixed inset-0 bg-black opacity-75 cursor-default'
				href='/animes'
				scroll={false}
			/>
			<div className='relative w-full max-w-3xl bg-slate-800 rounded-md shadow-md'>
				<div className='flex justify-between items-start'>
					<Link
						className='absolute top-2.5 right-2.5 h-6 w-6 bg-black text-white rounded justify-center items-center flex pb-0.5'
						href='/animes'
						scroll={false}
					>
						&times;
						<span className='sr-only'>Close Modal</span>
					</Link>
				</div>
				<div className='bg-slate-800 rounded-lg max-w-3xl mx-auto p-3 space-y-4 overflow-auto z-20'>
					<div className='grid gap-4 md:grid-cols-2 items-start'>
						<div className='aspect-square w-full relative bg-slate-800 rounded-t-lg'>
							<Image
								alt={anime.name}
								className='object-contain w-full rounded-lg overflow-hidden'
								fill={true}
								priority={true}
								loading='eager'
								src={`https://shikimori.one/${anime.image.original}`}
							/>
						</div>
						<div className='space-y-2'>
							<h1 className='font-bold text-2xl sm:text-3xl max-w-[90%]'>{anime.russian}</h1>
							<div className='flex items-center gap-4'>
								⭐ {anime.score}
								<span className='text-sm text-zinc-500'>({anime.score})</span>
							</div>
							<p className='line-clamp-6 text-sm leading-loose'>{anime.description}</p>

							<span className='inline-block bg-blue-200 text-blue-800 text-xs px-2 rounded-full uppercase font-semibold tracking-wide'>
								{anime.kind}
							</span>
						</div>
					</div>
				</div>
				{/* <div className='pb-3 px-3'>
					<button className='h-11 bg-secondary text-secondary-foreground hover:bg-secondary/80 justify-center flex text-center w-full border rounded py-2 text-white hover:bg-white transition-colors duration-300 hover:text-zinc-900 border-zinc-300 hover:border-zinc-900'>
						Buy Now
					</button>
				</div> */}
			</div>
		</div>
	)
}
