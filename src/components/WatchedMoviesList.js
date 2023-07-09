import WatchedMovie from "./WatchedMovie";

/**
 * Watched movies list
 * @prop {Object []} watched
 * @returns {JSX.Element}
 * @author Anik Paul
 */
export default function WatchedMoviesList({ watched, onDeleteWatched }) {
  return (
    <ul className="list">
      {watched.map((movie) => (
        <WatchedMovie
          movie={movie}
          key={movie.imdbID}
          onDeleteWatched={onDeleteWatched}
        />
      ))}
    </ul>
  );
}
