import { useState } from 'react'
import AcUnitIcon from '@mui/icons-material/AcUnit';
import './App.css'
import Nav from './components/Nav';
import Home from './pages/Home';
import { Route, Routes } from 'react-router-dom';

function App() {


  return (
    <>

      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/decription/:id' element={<Home />} />

      </Routes>


    </>
  )
}

export default App
