import React from 'react';

function Profile(props) {

// destructuring props
const {name, lastname} = props
  return (
    <div>
        <h1>Name: {name} {lastname}</h1>
    </div>
  )
}

export default Profile; 