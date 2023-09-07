import { createContext, useContext, useEffect, useState } from "react";
import { v4 as uuid } from "uuid";
import { movies } from "../db/movies";

const movieContext = createContext();

const MovieProvider = ({ children }) => {
  const [inputData, setinputData] = useState({
    title: "",
    summary: "",
    imageURL: "",
    year: "",
    genre: "",
    rating: "",
    director: "",
    writer: "",
    cast: "",
  });

  const [allMovies, setallMovies] = useState(movies);
  const [watchList, setWatchList] = useState([]);
  const [staredMovie, setStaredMovie] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [genreFilter, setgenreFilter] = useState("allGenre");
  const [yearFilter, setYearFilter] = useState("allYear");
  const [ratingFilter, setRatingFilter] = useState("allRating");

  useEffect(() => {
    setWatchList(JSON.parse(localStorage.getItem("watchList")) ?? []);
    setStaredMovie(JSON.parse(localStorage.getItem("staredMovie")) ?? []);
    setallMovies(JSON.parse(localStorage.getItem("allMovies")) ?? []);
  }, []);

  useEffect(() => {
    if (watchList.length) {
      localStorage.setItem("watchList", JSON.stringify(watchList));
    }
    if (staredMovie.length) {
      localStorage.setItem("staredMovie", JSON.stringify(staredMovie));
    }

    if (allMovies.lengthh) {
      localStorage.setItem("allMovies", JSON.stringify(allMovies));
    }
  }, [staredMovie, watchList, allMovies]);

  const AddToStared = (movie) => {
    setStaredMovie((prev) => [movie, ...prev]);
  };

  const RemoveFromStared = (id) => {
    setStaredMovie((prev) => prev.filter((movie) => movie.id !== id));
  };

  const AddToWatchList = (movie) => {
    setWatchList((prev) => [movie, ...prev]);
  };

  const RemoveFromWacthList = (id) => {
    setWatchList((prev) => prev.filter((movie) => movie.id !== id));
  };

  const FormInputHandler = (e) => {
    const { name, value } = e.target;
    setinputData((prev) => ({ ...prev, [name]: value }));
  };

  const AddMovie = (movie) => {
    setallMovies((prev) => [{ id: uuid(), ...movie }, ...prev]);
  };

  // let filteredData = [];
  //  filteredData = searchInput ? allMovies.filter((movie)=>movie.title.toUpperCase().includes(searchInput.toUpperCase())) : allMovies

  //  console.log(filteredData)

  let filteredData = allMovies
    .filter(
      (movie) => ratingFilter === "allRating" || movie.rating === ratingFilter
    )
    .filter((movie) => yearFilter === "allYear" || movie.year === yearFilter)
    .filter(
      (movie) => genreFilter === "allGenre" || movie.genre === genreFilter
    )
    .filter((movie) =>
      movie.title.toUpperCase().includes(searchInput.toUpperCase())
    );


    console.log(filteredData)

  return (
    <movieContext.Provider
      value={{
        allMovies,
        watchList,
        staredMovie,
        AddToStared,
        RemoveFromStared,
        AddToWatchList,
        RemoveFromWacthList,
        AddMovie,
        FormInputHandler,
        inputData,
        setinputData,
        searchInput,
        setSearchInput,
        filteredData,
        genreFilter,
        setgenreFilter,
        yearFilter,
        setYearFilter,
        ratingFilter,
        setRatingFilter,
      }}
    >
      {children}
    </movieContext.Provider>
  );
};

const useGlobleMovies = () => useContext(movieContext);
export { useGlobleMovies, MovieProvider };
