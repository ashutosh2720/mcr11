import React from 'react'

const Nav = () => {
    return (
        <div className=' w-full bg-gray-800 flex justify-between items-center text-white pl-2 pr-2 pt-2 pb-2'>
            <h1 className='text-2xl'>IMDB</h1>
            <input type="search" name="" id="" className='rounded-md pl-3 pr-3 pt-1 pb-1 w-[20%]' placeholder='search movie by title,cast,director..' />
            <div className="navigation-item flex justify-between items-center gap-5 ">
                <h1>Movies</h1>
                <h1>WatchList</h1>
                <h1>StarredMovies</h1>
            </div>

        </div>
    )
}

export default Nav
