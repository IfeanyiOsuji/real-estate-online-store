import React, { useState } from "react";
import "./App.css";

import useProductState from "./services/useProductState";
import Spinner from "./Spinner";
import { useParams } from "react-router-dom";
import PageNotFound from "./PageNotFound";
//import ProductProvider from "./context/ProductsContext";
import RenderProduct from "./RenderedProducts";


export default function Products() {
  const [size, setSize] = useState("");



  const {category} = useParams();
    const {data: products, loading, error} = useProductState(`products?category=${category}`);
    // let sizes = new Set();
    // products.map(product=>product.skus.map(sku=>{
    //     sizes.add(sku.size)
    // }))
  
  const filteredProduct = size ? products.filter(({skus}) => skus.find(sku => sku.size === parseInt(size))) : products;
  if(error) throw error;
  if(products.length ===0)return <PageNotFound />
  return (
   
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
            
          {!loading ? filteredProduct.map(RenderProduct): <Spinner />}
          </section>
            </div>
   
  );
}
