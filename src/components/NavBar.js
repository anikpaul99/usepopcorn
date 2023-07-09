import Logo from "./Logo";

/**
 * Nav component
 * @returns {JSX.Element}
 * @author Anik Paul
 */
export default function NavBar({ children }) {
  return (
    <nav className="nav-bar">
      <Logo />
      {children}
    </nav>
  );
}
