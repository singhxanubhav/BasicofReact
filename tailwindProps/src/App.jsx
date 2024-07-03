import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1>Hello Anubhav!</h1>
    <br/> <br/>
    <Card username = "Nidhi Singh"/>
    <Card username = "Sarita "/>
    <Card username = "Riya"/>
    <Card username = "Palak"/>
    <Card username = "Tanya"/>
    <Card username = "Hira"/>

    </>
  )
}

export default App
