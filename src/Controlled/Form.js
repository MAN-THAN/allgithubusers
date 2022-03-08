import { toHaveFocus } from '@testing-library/jest-dom/dist/matchers'
import React, { Component } from 'react'

export class Form extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name : ""
      }
    }
    change = (e) => {
        this.setState({

            name : e.target.value
        })

    }
  render() {
    return (
     <form>
         <input  type="text" value={this.state.name} onChange = {this.change}/>
     </form>
    )
  }
}

export default Form