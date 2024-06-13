import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Cards from './components/Cards'

function App() {
 

  return (
    <>
      
      <h1 className=' text-white rounded mb-5 bg-black'>Tailwind, React & props</h1>
      <Cards  username="Prity" btnText="View Profile"/>

      <Cards username="ChaiAurCode" btnText="Contact Details"/>
      
    </>
  )
}

export default App
