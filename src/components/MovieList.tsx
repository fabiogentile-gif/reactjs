import MovieCard from './MovieCard'

import type { MoviesType } from '../data/movies'

type MovieListProps = {
    movies: MoviesType[]
    onFavoriteToggle: (movieId: number) => void
}

export default function MovieList({ movies, onFavoriteToggle }: MovieListProps) {
    return (
        <>
        {movies.map((movie) => (
            <MovieCard
                key={movie.id}
                title={movie.title}
                year={movie.year}
                poster={movie.poster}
                genre={movie.genre}
                watched={movie.watched}
                favorite={movie.favorite}
                onFavoriteToggle={onFavoriteToggle}
            />
        ))}
        </>
    )
}