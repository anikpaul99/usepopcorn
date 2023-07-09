/**
 * will show an error message while something went wrong
 * @prop {string} message error message
 * @returns {JSX.Element}
 */
export default function ErrorMessage({ message }) {
  return (
    <p className="error">
      <span>⚠</span> {message}
    </p>
  );
}
