import Movie from "./Movie";

/**
 * Movies list from searched results
 * @returns {JSX.Element}
 * @author Anik Paul
 */
export default function MovieList({ movies, onSelectMovie }) {
  return (
    <ul className="list list-movies">
      {movies?.map((movie) => (
        <Movie movie={movie} key={movie.imdbID} onSelectMovie={onSelectMovie} />
      ))}
    </ul>
  );
}
