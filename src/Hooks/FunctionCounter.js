import React, { useState } from 'react'

const HookCounter = () => {

    const [ name, setName ] = useState( { firstName : '' , lastName: '' } )
// {firstName : "saksham"}
// { lastName:'kashyap' }

    return (
        <form>
            <h1>{ JSON.stringify(name) } </h1>
            
            <input type='text' value = {name.firstName} onChange={ 
                (e)=> setName( { ...name, firstName: e.target.value } ) 
            } />

            
            <input type='text' value={name.lastName} onChange={ 
                (e)=> setName( { ...name, lastName: e.target.value } ) 
            } />
            
        </form>
    )
}

export default HookCounter
