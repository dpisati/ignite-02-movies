import { MovieCard } from "./MovieCard";

interface Ratings {
  Value: string;
}

interface Movie {
  imdbID: string;
  Title: string;
  Poster: string;
  Runtime: string;
  Ratings: Ratings[];
}

interface ContentProps {
  selectedGenre: {
    title: string;
  }
  movies: Movie[];
}

export const Content = ({selectedGenre, movies}: ContentProps) => {
  return (
    <div className="container">
    <header>
      <span className="category">Categoria:<span> {selectedGenre.title}</span></span>
    </header>

    <main>
      <div className="movies-list">
        {movies.map(movie => (
          <MovieCard key ={movie.imdbID} title={movie.Title} poster={movie.Poster} runtime={movie.Runtime} rating={movie.Ratings[0].Value} />
        ))}
      </div>
    </main>
  </div>
  )
}