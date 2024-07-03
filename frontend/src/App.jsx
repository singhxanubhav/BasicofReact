import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 
  let [counter, setCounter] = useState(20)

  const addValue = () => {
    console.log("clicked");
    if (counter<20){
    setCounter(counter + 1)
    }
  };

  const removeValue = () => {
    console.log("CLICKED")
    if(counter>0){
    setCounter(counter - 1)
    }
  };



  return (
    <>
      <h1>Anubhav Singh</h1>
      <br/>
      <h2>Age: {counter}</h2>
      <button onClick={addValue}>Increase Age</button>
      <br/><br/>
      <button onClick={removeValue}>Decrease Age</button>
    </>
  )
}

export default App
