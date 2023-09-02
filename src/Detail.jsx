

import React from 'react'
import { useParams } from 'react-router-dom'
import useProductState from './services/useProductState';

function Detail() {
    const {id} = useParams();
    const {data:product} = useProductState(`products/${id}`)

  return (
    <div id='detail'>
        <h1>{product.name}</h1>
        <p>{product.description}</p>
        <p id='price'>${product.price}</p>
        <img src={`/images/${product.image}`} alt={product.category} />
    </div>
  )
}

export default Detail