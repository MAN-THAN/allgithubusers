import React, {useEffect} from 'react'

const ChildComponent = () => {
    useEffect(() => {
        console.log("yeh!");
        return () => {console.log("bye")}
    })

  return (
    <div>ChildComponent</div>
  )
}

export default ChildComponent