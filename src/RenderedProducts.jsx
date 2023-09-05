import { NavLink } from "react-router-dom";
import React from "react";


function RenderProduct(p) {
    return (
      
      <div key={p.id} className="product">
         <NavLink to= {`/${p.category}/${p.id}`}>
          <img src={`/images/${p.image}`} alt={p.name} />
          <h3>{p.name}</h3>
          <p>${p.price}</p>
          </NavLink>
      </div>
     
    );
  }
  export default RenderProduct;