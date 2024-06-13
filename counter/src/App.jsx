import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
   
  // let counter =1;
  let [counter, setCounter] = useState(1)
 
  



  const addValue = () => {
    console.log(counter)
    counter= counter+1;
    setCounter(counter);


  }

  const removeValue =() => {
    if(counter> 0){
    counter = counter-1;
    
    setCounter(counter);
  }
}

  return (
    <>
     <h1>React-practice-project</h1>
     <h2>Counter : {counter}</h2>

     <button onClick={addValue}>Add Value  {counter}</button>
     <button  onClick={removeValue}>Remove Value  {counter}</button>

    </>
  )
}

export default App
