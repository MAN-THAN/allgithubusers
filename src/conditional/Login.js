import React from 'react'

const Login = ({loggedin}) => {
    if(loggedin){
  return (
      <>
    <div>Welcome to my Page!</div>
    <button> LOGOUT </button>
    </>
  )
    }
    else{
        return (
            <>
            <div>Pls Login</div>
            <button>LOGIN</button>
            </>
        )
    }
    
    
}

export default Login