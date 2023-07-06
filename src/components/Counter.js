import React, { Component } from 'react'

class Counter extends Component {
constructor(props) {
  super(props)
  this.state = {
     count: 0,
  }

  this.reset = this.reset.bind(this);
  // way of binding
  // this.increment = this.increment.bind(this);
}

// Another way of binding is by using an arrow function
increment = () => {
    this.setState({
        count: this.state.count + 1,
    });
}

decrement(){
    this.setState({
        count: this.state.count - 1,
    });
}

reset(){
    this.setState({
        count: this.state.count,
    });
}

  render() {
    return (
      <div>
        <h3>Count : {this.state.count}</h3>
        <button onClick={this.increment}>Click!</button>
        <button onClick={() => this.decrement()}>Click</button>
        <button onClick={this.reset}>Reset</button>
      </div>
    )
  }
}

export default Counter;