import { useEffect, useState } from "react"
import { getProducts } from "./productService";


const useProductState = () =>{
const [data, setData] = useState([]);
const [loading, setLoading] = useState(true);
const [error, setError] = useState(null)

useEffect(()=>{
     console.log('in use effect')
   getProducts('shoes').then(response =>
    setData(response)).catch(e => {setLoading(false)
    setError(e);
}).finally(()=>setLoading(false));
   
}, []);
return {data, loading, error}
}

export default useProductState;