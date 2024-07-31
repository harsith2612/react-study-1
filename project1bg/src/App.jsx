import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState("black");

  return (
    <>
      <div className="w-full h-screen" style={{backgroundColor:color}}>
        

        <div className="fixed flex flex-wrap justify-center  bottom-12 inset-x-0 px-2">
        <div className="bg-white flex flex-wrap justify-center gap-3 shadow-xl px-3 py-2 rounded-lg">
          <button className='rounded-full px-4  py-1 text-white shadow-2xl' style={{backgroundColor:"red"}} onClick={()=>setColor('red')}>
            red
          </button>

          <button className='rounded-full px-4  py-1 text-white shadow-2xl' style={{backgroundColor:"limegreen"}} onClick={()=>setColor('limegreen')}>
            yellow
          </button>

          <button className='rounded-full px-4  py-1 text-white shadow-2xl' style={{backgroundColor:"orange"}} onClick={()=>setColor('orange')}>
            orange
          </button>

          <button className='rounded-full px-4  py-1  shadow-2xl' style={{backgroundColor:"lavender"}} onClick={()=>setColor('lavender')}>
            lavender
          </button>
        </div>
        </div>
      </div>
    </>
  )
}

export default App
