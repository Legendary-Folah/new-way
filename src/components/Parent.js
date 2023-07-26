import React, { useState } from 'react'
import Child from './Child';

function Parent() {

    const [parentcount, setParentCount] = useState(0);
    const [childcount, setChildCount] = useState(0);

        const handleParentCount = () => {
            setParentCount(parentcount + 1);
        }

        const handleChildParent = () => {
            setChildCount(childcount + 1);
        }

  return (
    <div>
        This is a Parent Component
        <h2>Parent Count is {parentcount}</h2>
        <Child count={childcount}/>
        <button onClick={handleParentCount}>Increment Parent Count</button>
        <button onClick={handleChildParent}>Increment Child Count</button>
    </div>
  )
}

export default Parent;