import React, { Component } from 'react'

class ClassEvent extends Component {

    handleClick(){
        console.log('Clicked here!!')
    }

  render() {
    return (
      <div>
        Class event.
        <button onClick={this.handleClick}>Click Me!</button>
      </div>
    )
  }
}

export default ClassEvent;