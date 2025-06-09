import React from "react";

function Header() {
  return (
    <div>
      <div>
        <p className="px-6 py-6 text-center text-4xl sm:text-5xl md:text-6xl">
          <span className="text-yellow-500">Your💡ideas</span>,
          <span className="text-blue-500">📚 docs</span>,
          <br />& <span className="text-green-500">🎯 projects</span>. Together.
        </p>
        <p className="text-center text-xl sm:text-2xl font-serif">
          Station is the connected workspace where
          <br />
          better, faster work happens.
        </p>
      </div>
    </div>
  );
}

export default Header;
