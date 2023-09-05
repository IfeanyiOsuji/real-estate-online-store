import { createContext, useState } from "react";
import useProductState from "../services/useProductState";



export const ProductsContext = createContext();

const ProductProvider = ({children, initialSize}) =>{
   
    const [size, setSize] = useState(initialSize);

    return(
        <ProductsContext.Provider value={{size, setSize}}>
            {children}
        </ProductsContext.Provider>
    )
}

export default ProductProvider;