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
        this.
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
                value={}
            />
        </form>
      </div>
    )
  }
}

export default Form;