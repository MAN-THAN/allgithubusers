import React from 'react'

const Garage = ({props}) => {
    console.log(props);
    
  return (
    props.length > 2 &&<div>Garage</div>
  )
}

export default Garage