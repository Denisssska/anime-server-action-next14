import { ProductModal } from '@/components/ProductModal'
import React, { Suspense } from 'react'
import { fetchAnimeShikimori } from '../action'
import LoadMore from '@/components/LoadMore'
import { ModalLoading } from '@/components/ModalLoading';
export type Props = {
	searchParams: Record<string, string> | null | undefined
}
export interface ICard {
	id: number
	name: string
	russian: string
	image: {
		original: string
		preview: string
		x96: string
		x48: string
	}
	url: string
	kind: string
	score: string
	status: string
	episodes: number
	episodes_aired: number
	aired_on: string
	released_on: string
}
const Animes = async (props: Props) => {
	const data = await fetchAnimeShikimori(1)
	const { searchParams } = props
	const showModal = searchParams?.modal === 'true'
	const productId = searchParams?.id
	
	return (
		<main className='sm:p-16 py-16 px-8 flex flex-col gap-10'>
			<h2 className='text-3xl text-white font-bold'>Explore Anime</h2>

			<section className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10'>
				{data}
				{showModal && (
					<Suspense key={productId} fallback={<ModalLoading />}>
						<ProductModal id={productId} />
						{/* <ModalLoading /> */}
					</Suspense>
				)}
			</section>

			<LoadMore />
		</main>
	)
}

export default Animes
