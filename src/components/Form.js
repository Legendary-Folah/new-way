import React, { Component } from 'react'

class Form extends Component {

    state = {
        firstname: ''
    }

    // the onChange method.
    handleChange = (event) => {
        this.setState({
            firstname: event.target.value,
        })
    }

  render() {
    return (
      <div>
        Form
        <form>
            <input 
                onChange={this.handleChange} 
                type='text' 
                value={this.state.firstname} 
            />
        </form>
      </div>
    )
  }
}

export default Form;