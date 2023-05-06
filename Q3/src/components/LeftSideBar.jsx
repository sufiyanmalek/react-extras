import React from "react";
import MovieDetail from "../assets/MovieDetail.json";

const LeftSideBar = ({ movies, onMovieClick }) => {
  return (
    <div
      className="border border-2 col-3 p-3"
      style={{ backgroundColor: "#2c548b" }}
    >
      {movies.map((e) => {
        let movie;
        movie = MovieDetail.find((m) => m.MovieID == e.MovieID);

        return (
          <p
            style={{
              backgroundColor: "#4472c4",
              width: "90%",
              color: `${
                movie.Details.ActorsNames.includes(movie.Details.DirectorName)
                  ? "yellow"
                  : "white"
              }`,
            }}
            key={e.MovieID}
            className="text-center my-2 fs-5 p-4 movies mx-auto rounded-2 "
            onClick={() => onMovieClick(e.MovieID)}
          >
            {e.MovieName}
          </p>
        );
      })}
    </div>
  );
};

export default LeftSideBar;
