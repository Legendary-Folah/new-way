import React from 'react'

function FunctionEvent() {

    // Function
    const handleClick = () => {
        console.log('Button Clicked!')
    };

  return (
    <div>
        Function event
        <button onClick={handleClick}>Click Here!</button>
    </div>
  )
}

export default FunctionEvent;