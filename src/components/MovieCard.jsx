import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useGlobleMovies } from '../context/videoContext'

const MovieCard = ({ movie }) => {
    const {RemoveFromStared,RemoveFromWacthList,watchList,staredMovie,AddToWatchList,AddToStared} = useGlobleMovies()
    const navigate = useNavigate()
    return (
        <div className='w-[450px] h-[550px] rounded-md bg-slate-900 text-white shadow-md p-5'>
            <img src={movie.imageURL} alt="" className='w-[100%] h-[80%] rounded-md cursor-pointer'  onClick={() => navigate(`/description/${movie.id}`)}  />
            <h1 className='font-bold'>{movie.title}</h1>
            <h1>{movie?.summary?.slice(0, 100)}</h1>
            <div className="btn flex text-white gap-4 ">
                <button className='bg-gray-700 px-2 py-2 p-1 rounded-md' onClick={()=>staredMovie.find((item)=>item.id===movie.id)?RemoveFromStared(movie.id):AddToStared(movie)}>{staredMovie.find((item)=>item.id ===movie.id)?'already in stared ':'addToStaed'}</button>
                <button className='bg-gray-700 px-2 py-2 p-1 rounded-md' onClick={()=>watchList.find((item)=>item.id===movie.id)?RemoveFromWacthList(movie.id):AddToWatchList(movie)}>{watchList.find((item)=>item.id ===movie.id)?'already in watchList ':'addToWatchList'}</button>
            </div>


        </div>
    )
}

export default MovieCard
