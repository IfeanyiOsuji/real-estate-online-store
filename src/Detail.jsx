

import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import useProductState from './services/useProductState';
import Spinner from './Spinner';
import PageNotFound from './PageNotFound';

function Detail() {
    const {id} = useParams();
    const navigate = useNavigate()

    const {data:product, loading, error} = useProductState(`products/${id}`)

    if (loading) return <Spinner />;
    if(!product) return <PageNotFound />;
    if(error) throw error;
   
  return (
    <div id='detail'>
        <h1>{product.name}</h1>
        <p>{product.description}</p>
        <p id='price'>${product.price}</p>
        <button className='btn btn-primary' onClick={()=>navigate('/cart')}>Add to cart</button>
        <img src={`/images/${product.image}`} alt={product.category} />
    </div>
  )
}

export default Detail