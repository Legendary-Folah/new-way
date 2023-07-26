import React, { useState } from 'react'
import Child from './Child';

function Parent() {

    const [parentcount, setParentCount] = useState(0);
    const [childcount, setChildCount] = useState(0);

  return (
    <div>
        This is a Parent Component
        <h2>Parent Count is {}</h2>
        <Child count={childcount}/>
        <button>Increment Parent Count</button>
        <button>Increment Child Count</button>
    </div>
  )
}

export default Parent;