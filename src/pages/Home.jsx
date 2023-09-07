import React, { useState } from 'react'

import { movies } from '../db/movies'
import MovieCard from '../components/MovieCard'
import { useGlobleMovies } from '../context/videoContext'

const Home = () => {
    const {allMovies,filteredData} = useGlobleMovies();

    return (
        <div className='w-full h-full'>
          
            <div className="movies w-[100%] h-screen gap-3 flex flex-wrap justify-center items-center">

                {
                    filteredData?.map((movie) =>
                        <MovieCard movie={movie} />
                    )
                }
            </div>

        </div>
    )
}

export default Home
