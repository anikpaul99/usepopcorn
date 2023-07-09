import { useState } from "react";

/**
 * Movies from searched results and Watched movies details
 * @returns {JSX.Element}
 * @author Anik Paul
 */
export default function Box({ children }) {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="box">
      <button className="btn-toggle" onClick={() => setIsOpen((open) => !open)}>
        {isOpen ? "–" : "+"}
      </button>

      {isOpen && children}
    </div>
  );
}
