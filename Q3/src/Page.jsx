import React from "react";
import MovieDetail from "./assets/MovieDetail.json";
import Filter from "./assets/Filter.json";
import { useState } from "react";
import Header from "./components/Header";
import LeftSideBar from "./components/LeftSideBar";
import VideoPlayer from "./components/VideoPlayer";
import RightSideBar from "./components/RightSideBar";

const Page = () => {
  const [data, setData] = useState({ ...Filter });
  const [selectedMovie, setSelectedMovie] = useState({});
  const [choice, setChoice] = useState([]);
  const [choice1, setChoice1] = useState("");
  const onMovieClick = (id) => {
    const movie = MovieDetail.find((e) => e.MovieID == id);

    setSelectedMovie({ ...movie });
  };
  const handleFilterChange = (e) => {
    setChoice1(e.target.value);
    if (e.target.value == "default") {
      setChoice([]);
      return;
    }
    setChoice([...data[e.target.value]]);
  };

  const finalFilter = (e) => {
    if (choice1 == "Movies") {
      const data1 = MovieDetail.filter(
        (m) => m.MovieID === parseInt(e.target.value)
      );
      console.log(data1);
      const fullData = data;
      fullData.Movies = data1.map((e) => {
        return { MovieID: e.MovieID, MovieName: e.MovieName };
      });
      setData({ ...fullData });
    }
  };
  console.log(choice);

  return (
    <div>
      <select
        name="filterCategory"
        id="filterCategory"
        onChange={handleFilterChange}
      >
        <option value="default" defaultChecked>
          Select Filter
        </option>
        <option value="Directors">Directors</option>
        <option value="Movies">Movies</option>
        <option value="Actors">Actors</option>
      </select>
      <select name="filterBy" id="filterBy" onChange={finalFilter}>
        <option value="default" defaultChecked>
          Select One
        </option>
        {choice?.map((e, index) => {
          return (
            <option
              key={e.MovieID ? e.MovieID : index}
              value={e.MovieID ? e.MovieID : e}
            >
              {e.MovieName ? e.MovieName : e}
            </option>
          );
        })}
      </select>
      <Header movieDetails={selectedMovie.Details} />
      <div className="row ">
        <LeftSideBar movies={data.Movies} onMovieClick={onMovieClick} />
        <VideoPlayer movieDetails={selectedMovie.Details} />
        <RightSideBar movieDetails={selectedMovie.Details} />
      </div>
    </div>
  );
};

export default Page;
