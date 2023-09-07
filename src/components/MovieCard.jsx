import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useGlobleMovies } from '../context/videoContext'

const MovieCard = ({ movie }) => {
    const {AddToWatchList,AddToStared} = useGlobleMovies()
    const navigate = useNavigate()
    return (
        <div className='w-[200px] h-[350px] shadow-md '>
            <img src={movie.imageURL} alt="" className='w-[100%] h-[50%] cursor-pointer'  onClick={() => navigate(`/description/${movie.id}`)}  />
            <h1 className='font-bold'>{movie.title}</h1>
            <h1>{movie?.summary?.slice(0, 100)}</h1>
            <div className="btn flex text-white gap-1">
                <button className='bg-gray-500 p-1' onClick={()=>AddToStared(movie)}>Star</button>
                <button className='bg-gray-500 p-1' onClick={()=>AddToWatchList(movie)}>Add to watchList</button>
            </div>


        </div>
    )
}

export default MovieCard
