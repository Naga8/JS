import { useState } from "react";
import "./styles.css";

export default function App() {
  const [count, setCount] = useState(0)
  const numInc = () =>{
    count ==="The value is less than zero" ? setCount(0): setCount(count + 1)
  }
  const numDec = () =>{
    count > 0 ? setCount(count - 1) : setCount("The value is less than zero")
  }
  return (
    <div className="App">
      <h1>counter</h1> 
        <button onClick={numInc}>Increment</button>
        <div>
        <br/>
         {count}
        </div>
        <br/>
        <button onClick={numDec}>Decrement</button>
    </div>
  )
}