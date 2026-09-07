import { useState } from 'react'
import Container from './components/Container'
import MovieList from './components/MovieList'
import { Movies, type MoviesType } from './data/movies'

function App() {
  const [movies, setMovies] = useState<MoviesType[]>(Movies)

  function handleFavoriteToggle(movieId: number) {
    setMovies((currentMovies) =>
      currentMovies.map((movie) =>
        movie.id === movieId ? { ...movie, favorite: !movie.favorite } : movie,
      ),
    )
  }

  return (
    <Container>
      <main className="grid grid-cols-2 gap-3.5 sm:gap-5 lg:grid-cols-4">
        <MovieList movies={movies} onFavoriteToggle={handleFavoriteToggle} />
      </main>
    </Container>
  )
}

export default App
