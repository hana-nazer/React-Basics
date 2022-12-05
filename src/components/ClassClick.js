import React, { Component } from 'react'

 class ClassClick extends Component {
    clickhandler(){
        console.log("button clicked");
    }
  render() {
    return (
      <div>
        <button onClick={this.clickhandler}>click me</button>
      </div>
    )
  }
}

export default ClassClick