import React from 'react'
import Header from '../components/Header'
import { movies } from '../db/movies'
import MovieCard from '../components/MovieCard'

const Home = () => {
    return (
        <div className='w-full h-full'>
            <Header />
            <div className="movies w-[100%] h-screen gap-3 flex flex-wrap justify-center items-center">

                {
                    movies.map((movie) =>
                        <MovieCard movie={movie} />
                    )
                }
            </div>

        </div>
    )
}

export default Home
