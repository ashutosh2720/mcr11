import React, { useState } from "react";
import { movies } from "../db/movies";
import AddMovieModal from "./AddMovieModal";
import { useGlobleMovies } from "../context/videoContext";

const Header = () => {
  const [modal, setModal] = useState(false);

  const genre = [
    "allGenere",
    "Action",
    "Adventure",
    "Sci-Fi",
    "Biography",
    "Fantasy",
  ];

  const year = [ 'allYear', 1991, 1992, 1994, , 1999, 2001, 2003, 2008, 2010];
  const rating = ['allrating', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const {
    allMovies,
    genreFilter,
    setgenreFilter,
    yearFilter,
    setYearFilter,
    ratingFilter,
    setRatingFilter,
  } = useGlobleMovies();

  return (
    <div className="w-[100%] flex  justify-around ">
      <h1>Movies</h1>
      <select
        name="genreFilter"
        id="genreFilter"
        value={genreFilter}
        className="border-[3px]"
        onChange={(e) => setgenreFilter(e.target.value)}
      >
     
        {genre.map((item) => (
          <option value={item}>{item}</option>
        ))}
      </select>
      <select
        name="yearFilter"
        id="yearFilter"
        value={yearFilter}
        className="border-[3px]"
        onChange={(e) => setYearFilter(e.target.value)}
      >
        {year.map((item) => (
          <option value={item}>{item}</option>
        ))}
      </select>
      <select
        name="ratingFilter"
        id="ratingFilter"
        value={ratingFilter}
        className="border-[3px]"
        onChange={(e) => setRatingFilter(e.target.value)}
      >
        {rating.map((item) => (
          <option value={item}>{item}</option>
        ))}
      </select>
      <button
        className="bg-cyan-900 px-5 py-2 rounded-md text-white"
        onClick={() => setModal(true)}
      >
        Add a movie
      </button>
      {modal && <AddMovieModal setModal={setModal} />}
    </div>
  );
};

export default Header;
