import { useState } from 'react'
import AcUnitIcon from '@mui/icons-material/AcUnit';
import './App.css'
import Nav from './components/Nav';
import Home from './pages/Home';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Nav />
      <Home />

    </>
  )
}

export default App
