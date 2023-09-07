import React from "react";
import { useGlobleMovies } from "../context/videoContext";
import { NavLink } from "react-router-dom";
import Header from "./Header";

const Nav = () => {
const {allMovies,searchResult,setSearchInput,searchInput} = useGlobleMovies()

  const { watchList, staredMovie } = useGlobleMovies();
  return <>
    <div className=" w-full bg-gray-800 flex justify-between items-center pl-2 pr-2 pt-2 pb-2">
      <h1 className="text-2xl text-white">IMDB</h1>
      <input
        type="search"
        name="saerch"
        id="search"
        value={searchInput}
        className="rounded-md pl-3 pr-3 pt-1 pb-1 w-[20%]"
        placeholder="search movie by title,cast,director.."
        onChange={(e)=> setSearchInput(e.target.value)}
      />
      <div className="navigation-item flex justify-between items-center gap-5 ">
        <NavLink to={"/"}>
          {" "}
          <h1 className="text-white">Movies</h1>
        </NavLink>
        <NavLink to={"/watchlist"}>
          {" "}
          <h1 className="text-white">{watchList.length}: WatchList</h1>
        </NavLink>
        <NavLink to={"/stared"}>
          <h1 className="text-white">{staredMovie.length}StarredMovies</h1>
        </NavLink>
      </div>
     
    </div>
    <Header/>
    
    </>
};

export default Nav;
