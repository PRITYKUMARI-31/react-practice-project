import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 
  const [color, setColor] = useState("#ffffff");

  return (
    <>
    
   
    <div className='flex justify-center items-center w-full h-screen' style={{backgroundColor: color}}>

     
     
    <div className=" space-y-2 md:flex-row md:space-x-2 md:space-y-0">
      <div className='flex justify-center mb-10'>
      <h1 className = "text-blue-500 font-bold text-3xl ">Bg Changer</h1>
      </div>
  <button
    type="button"
    className="rounded-md px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
  style={{backgroundColor : "#f54242"}}
  onClick={() => setColor("#f54242")}>
    
    Button text
  </button>
  <button
    type="button"
    className="rounded-md px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-yellow-600/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-600"
    style={{backgroundColor : "#f5bc42"}}
    onClick={() => setColor("#f5bc42")}
  >
    Button text
  </button>
  <button
    type="button"
    className="rounded-md px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-600/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
    style={{backgroundColor : "#cef542"}}
    onClick={() => setColor("#cef542")}
  >
    Button text
  </button>
  <button
    type="button"
    className="rounded-md px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-600/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
    style={{backgroundColor : "#42f563"}}
    onClick={() => setColor("#42f563")}
  >
    Button text
  </button>
  <button
    type="button"
    className="rounded-md px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-600/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
    style={{backgroundColor : "#42f5f2"}}
    onClick={() => setColor("#42f5f2")}
  >
    Button text
  </button>
  <button
    type="button"
    className="rounded-md px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-600/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
    style={{backgroundColor : "#428df5"}}
    onClick={() => setColor("#428df5")}
  >
    Button text
  </button>
</div>
</div>


   
    </>
  )
}

export default App
