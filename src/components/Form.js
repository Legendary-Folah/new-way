import React, { Component } from 'react'

class Form extends Component {

    state = {
        firstname: '',
        lastname: ''
    }

    // the onChange method.
    handleChange = (event) => {
        this.setState({
            firstname: event.target.value,
        })
    }

    handleLastNameChange = (event) => {
        this.setState({
            lastname: event.target.value,
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

            <input 
                onChange={this.handleLastNameChange}
                type='text'
                value={this.state.lastname}
            />
        </form>
      </div>
    )
  }
}

export default Form;