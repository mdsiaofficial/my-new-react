import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Ashiq from './Ashiq'
import Card from './Comps/Card'

function Chess() {
  return (
    <div>
      <h1>Here is Chess or 29 ?</h1>
    </div>
  );
}

function App() {
  const [count, setCount] = useState(0)

  const cc = () => {
    setCount(count + 1);
  }

  let age = 24;
  let arr = [2,3,4];
  let myobj = {
    name: "Ashiq",
    age: 24,
    address: "Dhaka"
  }
  return (
    <>
      <Ashiq />
      Counting: {count}<br></br>
      <button onClick={cc}>Click Me</button>
      <Chess></Chess>
      <Card></Card>
      <Card channel="mdsiaofficial" age={age} array={arr} obj={myobj} btnText="Click Me"></Card>
    </>
  )
}

export default App
