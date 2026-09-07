import type { MoviesType } from '../data/movies'

type MovieCardProps = MoviesType & {
	onFavoriteToggle: (movieId: number) => void
}

function MovieCard({ id, title, year, poster, genre, watched, favorite, onFavoriteToggle }: MovieCardProps) {

	return (
		<article className="overflow-hidden rounded-lg border border-[#dce5e3] bg-white shadow-[0_12px_24px_rgb(25_59_67_/_8%)]">
			<img className="block aspect-[2/3] w-full object-cover" src={poster} alt={`Locandina di ${title}`} />
			<div className="p-3 sm:p-4">
				<h2 className="mb-2 text-[1.15rem] font-normal leading-[1.15] text-[#193b43]">{title}</h2>
				<p className="text-[0.9rem] font-bold text-[#d56b3d]">{year}</p>
                {genre && <p className="text-[0.9rem] font-bold text-[#d56b3d]">{genre}</p>}
                {watched ? <p className="text-[0.9rem] font-bold text-[#d56b3d]">✅ Visto</p> : <p className="text-[0.9rem] font-bold text-[#d56b3d]">👀 Da vedere</p>}
			</div>
            <button 
				type="button"
            className="w-full rounded-b-lg bg-[#d56b3d] py-2 text-[0.9rem] font-bold text-white transition-colors duration-300 hover:bg-[#c55a2c]" 
			onClick={() => onFavoriteToggle(id)}>
				{favorite ? '★ Preferito' : '☆ Preferito'}
            </button>
		</article>
	)
}

export default MovieCard
