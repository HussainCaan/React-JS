

import { useState } from 'react'
import './App.css'
 
function App() {

  // let value = 0
  let [value, setCount] = useState(0)

  const addvalue = () =>{
    value = value + 1
    setCount(value)
    console.log(value)
  }
  const removevalue = () =>{
    value = value - 1
    setCount(value)
    console.log(value)
  }

  return (
    <>
    <h1>chai aur react</h1>
    <h2 class = "code">counter value is {value}</h2>
    <button class= "counter" onClick={addvalue}>Add Value  {value}</button>
    <button class= "counter" onClick={removevalue}>Remove Value {value}</button>
    </>
  )
}

export default App
