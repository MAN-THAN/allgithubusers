import React, { useEffect, useState } from 'react'
import axios from "axios"
import "./xxxx.css"

const GitHubapi = () => {

    const [users, setUsers] = useState([]);

    const getUsers = async () => {
        const res = await axios.get("https://api.github.com/users")
       
        console.log(res.data)
        setUsers(res.data)
      
       
    }

    useEffect(() => {
        getUsers()
    }

    , [])

    


  return (
  <div className='container'>
    <h2>List of All Github Users</h2>
    <div className='box'>

    {users.map((e) => {return (
        <div className="card">
        <img src={e.avatar_url} className="card-img-top image" alt="..." height="300"/>
        <div className="card-body">
          <h5 className="card-title">{e.login}</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
      </div>
    )})}
    </div>
   
  </div>
  )
}

export default GitHubapi