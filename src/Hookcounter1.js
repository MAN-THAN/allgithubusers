import React , { useState, useEffect } from 'react'
import ChildComponent from './ChildComponent';


const Hookcounter1 = () => {
    const [count, setCount] =  useState(false);
    const [name, setName] = useState("")
   




  return (
      <>
      {count ? <ChildComponent /> : ""}
      <button onClick={() => {setCount(!count)}}>Toggle</button>
      </>
      
  )
}

export default Hookcounter1