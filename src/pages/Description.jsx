import React from 'react'
import { useParams } from 'react-router-dom'
import { movies } from '../db/movies'
import { useGlobleMovies } from '../context/videoContext'

const Description = () => {
    const { id } = useParams()
    const movie = movies?.find((movie) => movie.id === Number(id))
    const {RemoveFromStared,RemoveFromWacthList,watchList,staredMovie,AddToWatchList,AddToStared} = useGlobleMovies()

    return (
        <div className='w-full h-full flex  justify-around items-start shadow-lg '>
            <div className="left w-[30%] h-[100%]">
                <img src={movie?.imageURL} alt="" className='h-[100%] w-[100%]' />
            </div>
            <div className="right w-[70%] p-6 flex gap-5 flex-col">

                <h1 className=' font-bold text-5xl '> {movie?.title}</h1>
                <h1>year : {movie?.year}</h1>
                <h1>Genere : {movie?.genre}</h1>
                <h1>Rating : {movie?.rating}</h1>
                <h1> Director : {movie?.director}</h1>
                <h1>Writer : {movie?.writer}</h1>
                <h1>Cast  : {movie?.cast}</h1>

                <div className="btn flex justify-between text-white">
                <button className='bg-gray-500 p-1' onClick={()=>staredMovie.find((item)=>item.id===movie.id)?RemoveFromStared(movie.id):AddToStared(movie)}>{staredMovie.find((item)=>item.id ===movie.id)?'already in stared ':'addToStaed'}</button>
                 
                    <button className='bg-gray-500 p-1' onClick={()=>watchList.find((item)=>item.id===movie.id)?RemoveFromWacthList(movie.id):AddToWatchList(movie)}>{watchList.find((item)=>item.id ===movie.id)?'already in watchList ':'addToWatchList'}</button>
                </div>
            </div>

        </div>
    )
}

export default Description
