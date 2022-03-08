import React, { Component } from 'react'

export class ClassClick extends Component {
    click () {
        console.log("clicked!")
    }

    
  render() {
    
    
    return (
     <button onClick = {this.click}>ON click</button>
    )
  }
}

export default ClassClick