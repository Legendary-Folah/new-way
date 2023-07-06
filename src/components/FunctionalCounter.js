import React, {useState} from 'react'

function FunctionalCounter() {

const [count, setCount] = useState(0);

const increment = () => {
    setCount(count + 1)
}

const decrement = () => {
    setCount(count - 1);
}

const reset = () => {
    setCount(count);
}

  return (
    <div>
        Count : {count}
        <div>
            <button onClick={increment}>Click</button>
            <button onClick={decrement}>Click</button>
            <button onClick={reset}>Click</button>
        </div>
    </div>
  )
}

export default FunctionalCounter;