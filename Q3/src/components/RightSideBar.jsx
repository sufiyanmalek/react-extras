import React from "react";

const RightSideBar = ({ movieDetails }) => {
  return (
    <div
      style={{ backgroundColor: "#2c548b" }}
      className="col-3 border border-2 text-white"
    >
      <h5>Actor Names:</h5>
      <div className="my-2">
        {" "}
        {movieDetails &&
          movieDetails.ActorsNames.map((e, index) => {
            return (
              <p className="my-2" key={index + 1}>
                {index + 1}. {e}
              </p>
            );
          })}
      </div>
    </div>
  );
};

export default RightSideBar;
