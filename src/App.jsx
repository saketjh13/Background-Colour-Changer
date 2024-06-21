import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState('red')

  return (
    <>
      <div className="w-full h-screen justify-center" style={{ backgroundColor: color }}>
        <div className="fixed flex flex-wrap gap-3 bottom-16 bg-white p-2 rounded-lg left-1/4" style={{justifyContent: "center"}}>
          <button className='rounded-lg px-1' style={{backgroundColor: "Red"}} onClick={()=>setColor("red")}>Red</button>
          <button className='rounded-lg px-1' style={{backgroundColor: "Blue"}} onClick={()=>setColor("blue")}>Blue</button>
          <button className='rounded-lg px-1' style={{backgroundColor: "Green"}} onClick={()=>setColor("green")}>Green</button>
          <button className='rounded-lg px-1' style={{backgroundColor: "Olive"}} onClick={()=>setColor("Olive")}>Olive</button>
          <button className='rounded-lg px-1' style={{backgroundColor: "Orange"}} onClick={()=>setColor("Orange")}>Orange</button>

        </div>

      </div>
    </>
  )
}

export default App
