import React, { Component } from 'react'

class Form extends Component {
  render() {
    return (
      <div>
        Form
        <form>
            <input 
                onChange={this.handleChange} 
                type='text' 
                value={} 
            />
        </form>
      </div>
    )
  }
}

export default Form;