import { useState } from 'react'
import AcUnitIcon from '@mui/icons-material/AcUnit';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>
      <AcUnitIcon />
    </>
  )
}

export default App
