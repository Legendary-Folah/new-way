import React from 'react'

function Product() {
    // const products = ['laptop', 'Books', 'Phones', 'Cables']


    // using id as key.
    const products = [
        {
            id: 1,
            name: 'laptop',
            price: 300
        },
        {
            id: 2,
            name: 'Books',
            price: 200
        },
        {
            id: 3,
            name: 'phones',
            price: 500
        },
        {
            id: 4,
            name: 'cables',
            price: 450
        },
        {
            id: 5,
            name: 'laptop',
            price: 700
        }
    ]
  return (
    <div>
        {products.map((product) => (
            <h3 key={product.id}>{product.name}: ${product.price}</h3>
        ))
        }
    </div>
  )
}

export default Product;