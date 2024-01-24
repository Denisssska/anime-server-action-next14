'use server';

import AnimeCard, { AnimeProp } from '@/components/AnimeCard';

export const fetchAnimeShikimori = async(page:number)=>{
	const res = await fetch(`https://shikimori.one/api/animes?page=${page}&limit=8&order=popularity`,{
		cache: 'force-cache',
	});
  const data = await res.json();
	  // console.log(data)
  return data.map((item: AnimeProp, index: number) => (
		<AnimeCard key={item.id} anime={item} index={index} />
	))
}
export const fetchOneAnime = async(id:string)=>{
	console.log(id);
	
	const res = await fetch(`https://shikimori.one/api/animes/${id}`, {
		cache: 'no-store',
	})
  const data = await res.json();
	  // console.log(data)
		 return data
  // return <AnimeCard key={data.id} anime={data} index={data.id} />
}