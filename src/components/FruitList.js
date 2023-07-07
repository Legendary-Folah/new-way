import React from 'react';

function FruitList() {
 
    const fruits = ['apple', 'corn', 'mango', 'banana', 'pineapple'];

  return (

    // Using index as key.
    <div>
        {fruits.map((fruit, index) => (
            <h3 key={index}>{fruit}</h3>
        ))}
    </div>
  )
}

export default FruitList;