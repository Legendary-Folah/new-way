import React, { Component } from 'react'

class Message extends Component {
  render() {
    
    const {name} = this.props

    return (
      <div>Message: {name}</div>
    )
  }
}

export default Message;