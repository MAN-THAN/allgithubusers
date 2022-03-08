import React , {createContext, useState}from 'react'

export const StudentContext = React.createContext();

export const StudentProvider= (props) => {
  return (
   <StudentContext.Provider value = {"hiiiii"}>
       {props.children}
   </StudentContext.Provider>
  )
}


