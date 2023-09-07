import React from "react";
import { useGlobleMovies } from "../context/videoContext";
import { NavLink } from "react-router-dom";
import Header from "./Header";

const Nav = () => {
const {allMovies,searchResult,setSearchInput,searchInput} = useGlobleMovies()

  const { watchList, staredMovie } = useGlobleMovies();
  return <>
    <div className=" w-full bg-black-800 border-[1px] flex justify-between items-center px-5 py-5">
      <h1 className="text-2xl text-white">IMDB</h1>
      <input
        type="search"
        name="saerch"
        id="search"
        value={searchInput}
        className="rounded-md  px-5 py-2 w-[20%]"
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
