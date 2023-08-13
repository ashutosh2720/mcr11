import React from 'react'
import { useParams } from 'react-router-dom'
import { movies } from '../db/movies'

const Description = () => {
    const { id } = useParams()
    const movie = movies.find((movie) => movie.id === Number(id))

    return (
        <div className='w-full h-full flex  justify-center items-start '>
            <div className="left w-[30%]">
                <img src={movie.imageURL} alt="" className='h-[70%] w-[100%]' />
            </div>
            <div className="right">

                <h1>{movie.title}</h1>
                <h1>{movie.summary}</h1>
            </div>

        </div>
    )
}

export default Description
