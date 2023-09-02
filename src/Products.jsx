import React, { useState } from "react";
import "./App.css";

import useProductState from "./services/useProductState";
import Spinner from "./Spinner";
import { NavLink, useParams } from "react-router-dom";
import PageNotFound from "./PageNotFound";


export default function Products() {
  const [size, setSize] = useState("");
  function renderProduct(p) {
    return (
      
      <div key={p.id} className="product">
         <NavLink to= {`/${category}/${p.id}`}>
          <img src={`/images/${p.image}`} alt={p.name} />
          <h3>{p.name}</h3>
          <p>${p.price}</p>
          </NavLink>
      </div>
     
    );
  }
  const {category} = useParams();
    const {data: products, loading, error} = useProductState(`products?category=${category}`)
    
  
  const filteredProduct = size ? products.filter(({skus}) => skus.find(sku => sku.size === parseInt(size))) : products
  if(error) throw error;
  if(products.length ===0)return <PageNotFound />
  return (
    <>
      <div className="content">
          <section id="filters">
            <label htmlFor="size">Filter by Size:</label>{" "}
            <select id="size" value={size} onChange={(e)=>setSize(e.target.value)}>
              <option value="">All sizes</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
            </select>
          </section>
         
          <section id="products">
            
          {!loading ? filteredProduct.map(renderProduct): <Spinner />}
          </section>
            </div>
    </>
  );
}
