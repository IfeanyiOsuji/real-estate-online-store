

import React, { useContext, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import useProductState from './services/useProductState';
import Spinner from './Spinner';
import PageNotFound from './PageNotFound';
import { AppContext } from './context/AppContext';

function Detail() {
    const {id} = useParams();

    const {dispatch} = useContext(AppContext);
    
    const navigate = useNavigate()

    const {data:product, loading, error} = useProductState(`products/${id}`)

    const [sku, setSku] = useState("");

    

    if (loading) return <Spinner />;
    if(!product) return <PageNotFound />;
    if(error) throw error;
   
  return (
    <div id='detail'>
        <h1>{product.name}</h1>
        <p>{product.description}</p>
        <p id='price'>${product.price}</p>
        <select id="size" value={sku} onChange={(e)=>setSku(e.target.value)}>
              <option value="">What size?</option>
              {product.skus.map(s=> <option value={`${s.sku}`} key={s.sku}>{s.size}</option>)}
              {/* <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option> */}
            </select>
            <p>
                
        <button className='btn btn-primary' onClick={()=>{
            dispatch({type:'add',id, sku});
            navigate('/cart')
    }} disabled={!sku}>Add to cart</button>
            </p>
        <img src={`/images/${product.image}`} alt={product.category} />
    </div>
  )
}

export default Detail