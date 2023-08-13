import React from 'react'
import { useParams } from 'react-router-dom'
import { movies } from '../db/movies'

const Description = () => {
    const { id } = useParams()
    const movie = movies.find((movie) => movie.id === Number(id))
    console.log(movie)
    return (
        <div>
            <h1>{movie.title}</h1>
        </div>
    )
}

export default Description
