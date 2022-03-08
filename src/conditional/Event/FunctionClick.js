import React from 'react'

const FunctionClick = () => {
    function click (){
        console.log("clicked!")
    }
  return (
    <button onClick = {click}>ON click</button>
  )
}

export default FunctionClick