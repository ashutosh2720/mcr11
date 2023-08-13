import React from 'react'
import { useNavigate } from 'react-router-dom'

const MovieCard = ({ movie }) => {
    const navigate = useNavigate()
    return (
        <div className='w-[200px] h-[350px] shadow-md ' onClick={() => navigate(`/description/${movie.id}`)}>
            <img src={movie.imageURL} alt="" className='w-[100%] h-[50%]' />
            <h1 className='font-bold'>{movie.title}</h1>
            <h1>{movie.summary.slice(0, 100)}</h1>
            <div className="btn flex text-white gap-1">
                <button className='bg-gray-500 p-1'>Star</button>
                <button className='bg-gray-500 p-1'>Add to wishList</button>
            </div>


        </div>
    )
}

export default MovieCard
