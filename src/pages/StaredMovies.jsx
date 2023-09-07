import React from 'react'
import { useGlobleMovies } from '../context/videoContext'
import MovieCard from '../components/MovieCard';

const StaredMovies = () => {
    const {staredMovie} = useGlobleMovies();

  return (
    <div className='p-5 flex gap-5'>
      {
        staredMovie.length!==0 ? 
        staredMovie.map((movie)=>
        <MovieCard movie ={movie}/>
        ) : <h1 className='text-3xl '>stared movie list empty</h1>
      }
    </div>
  )
}

export default StaredMovies
