/**
 * search results (number of movies from result)
 * @returns {JSX.Element}
 * @author Anik Paul
 */
export default function NumResults({ movies }) {
  return (
    <p className="num-results">
      Found <strong>{movies.length}</strong> results
    </p>
  );
}
