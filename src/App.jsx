import { useState } from 'react'
import AcUnitIcon from '@mui/icons-material/AcUnit';
import './App.css'
import Nav from './components/Nav';
import Home from './pages/Home';
import { Route, Routes } from 'react-router-dom';
import Description from './pages/Description';
import WatchList from './pages/WatchList';
import StaredMovies from './pages/StaredMovies';

function App() {


  return (
    <>

      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/description/:id' element={<Description />} />
        <Route path='/stared' element={ <StaredMovies/>} />
        <Route path='/watchlist' element={ <WatchList/>} />
      </Routes>


    </>
  )
}

export default App
