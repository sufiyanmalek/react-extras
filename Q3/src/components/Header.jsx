import React from "react";

const Header = ({ movieDetails }) => {
  return (
    <div
      className="border border-2 py-3 text-center text-white"
      style={{ backgroundColor: "#2c548b" }}
    >
      <p>
        <strong className="fs-2">Director:</strong>
        {"  "}
        <span className="fs-2">
          {movieDetails && movieDetails.DirectorName}
        </span>
      </p>
    </div>
  );
};

export default Header;
