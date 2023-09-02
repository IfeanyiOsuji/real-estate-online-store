import React, { useState } from "react";
import "./App.css";
import Footer from "./Footer";
import Header from "./Header";
import useProductState from "./services/useProductState";
import Spinner from "./Spinner";


export default function App() {
  const [size, setSize] = useState("");
  function renderProduct(p) {
    return (
      <div key={p.id} className="product">
        <a href="/">
          <img src={`/images/${p.image}`} alt={p.name} />
          <h3>{p.name}</h3>
          <p>${p.price}</p>
        </a>
      </div>
    );
  }

    const {data: products, loading, error} = useProductState("products?category=shoes")
    
  
  const filteredProduct = size ? products.filter(({skus}) => skus.find(sku => sku.size === parseInt(size))) : products
  if(error) throw error;
  return (
    <>
      <div className="content">
        <Header />
        <main>
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
        
          
        </main>
      </div>
      <Footer />
    </>
  );
}
