import React, { Component } from 'react'

class Form extends Component {

    state = {
        firstname: ''
    }

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
                value={} 
            />
        </form>
      </div>
    )
  }
}

export default Form;