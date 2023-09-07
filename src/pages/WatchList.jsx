import React from 'react'
import { useGlobleMovies } from '../context/videoContext'
import MovieCard from '../components/MovieCard'

const WatchList = () => {
    const {watchList} = useGlobleMovies()
  return (
    <div  className='p-5 flex gap-4'>
      {
        watchList.lemgth!==0 ?
        watchList.map((movie)=>
        <MovieCard movie={movie}/>
        ): <h1 className='text-3xl text-center'>watch list empty</h1>
      }
    </div>
  )
}

export default WatchList
