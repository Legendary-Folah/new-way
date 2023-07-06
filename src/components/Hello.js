import React from 'react'

const name = 'Fola';

const displayMessage = () => {
	return 'Wassup brrr ?' ;
}

// parenthesis is used to make a function call.
function Hello() {
  return (
	<div>Hello world! My name is {name}, {displayMessage()}</div>
  )
}
export default Hello;