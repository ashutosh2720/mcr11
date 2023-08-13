import { useState } from 'react'
import AcUnitIcon from '@mui/icons-material/AcUnit';
import './App.css'
import Nav from './components/Nav';
import Home from './pages/Home';
import { Route, Routes } from 'react-router-dom';
import Description from './pages/Description';

function App() {


  return (
    <>

      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/description/:id' element={<Description />} />
      </Routes>


    </>
  )
}

export default App
