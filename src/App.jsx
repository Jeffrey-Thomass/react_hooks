import React, { useState , useEffect, useRef } from 'react'

export default function App() {
  const [count , setCount] = useState(0);
  const[input , setInput] = useState("");
  const inputRef = useRef(null)
  const countRef = useRef(1);

  // useEffect(() => {
  //   console.log("re-rendered")
  // })
  // useEffect(() => {
  //   console.log("re-rendered")
  // } ,[count])

  useEffect(() => {
    inputRef.current.focus()     // for useRef hook
  },[]);
  const IncrementRef = () => {
    countRef.current = countRef.current + 1;
  }

  return (
    <div>
      <h3>Hello World My name is Jeffrey </h3>
      <h2>{count}</h2>
      {count < 20 && (
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    )}
    {count > 0 && (
      <button onClick={() => setCount(count - 1)}>
        Decrement
      </button>
    )}
    <h2>{countRef.current}</h2>
    <input type="text" onChange={(e) => setInput(e.target.value)}/>
    <button onClick={IncrementRef}>incrementRef</button>

    <h1>{input}</h1>


    <input type="text" ref={inputRef} />
    </div>
  )
}
