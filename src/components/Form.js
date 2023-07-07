import React, { Component } from 'react'

export class Form extends Component {
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