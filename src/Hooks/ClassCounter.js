import React, { Component } from 'react'

export class ClassCounter extends Component {
    constructor(props){
        super(props);
        this.state = {
            count : 0
        }

    }



  render() {
    return (
        <>
      <div>ClassCounter</div>
      <button onClick={() => {this.setState({count : this.state.count + 1})}}>count : {this.state.count}</button>
      </>
    )
  }
}

export default ClassCounter