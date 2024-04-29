import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Ashiq from './Ashiq'


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
  return (
    <>
      <Ashiq />
      Counting: {count}<br></br>
      <button onClick={cc}>Click Me</button>
      <Chess></Chess>
    </>
  )
}

export default App
