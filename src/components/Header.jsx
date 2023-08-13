import React from 'react'
import { movies } from '../db/movies'

const Header = () => {
    return (
        <div className='w-[100%] flex  justify-around '>
            <h1>Movies</h1>
            <select name="" id="">
                {
                    movies.map((item) =>
                        <option value="">{item.genre}</option>
                    )
                }
            </select>
            <select name="" id="">
                {
                    movies.map((item) =>
                        <option value="">{item.year}</option>
                    )
                }
            </select>
            <select name="" id="">
                {
                    movies.map((item) =>
                        <option value="">{item.rating}</option>
                    )
                }
            </select>
            <button>Add a movie</button>


        </div>
    )
}

export default Header
