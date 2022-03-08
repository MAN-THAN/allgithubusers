import React from 'react'
import { Link,NavLink,Outlet } from 'react-router-dom'

const Product = () => {

  const myFun = (isActive)  => {
    return { 
      backgroundColor : isActive ? 'green' : 'black',
      color :  isActive ? 'pink' : 'grey'
    } 
  }

  return (
    <div style={{ textAlign:'center' }}>
        <h1>Products</h1>
        <h3>Every Products Are Below : </h3>

          <NavLink
            style={ 
              ({ isActive }) =>  {  
                return myFun(isActive)
              }
             }
            to='/products/mobile' className='btn btn-primary' >Mobile</NavLink>

            <NavLink
            style={ 
              ({ isActive }) =>  {  
                return myFun(isActive)
              }
             }
            to='/products/laptop' className='btn btn-primary' >Laptop</NavLink>
        <Outlet />
    </div>
  )
}

export default Product