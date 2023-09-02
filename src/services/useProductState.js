import { useEffect, useState } from "react"
import { getProducts } from "./productService";
const baseUrl = process.env.REACT_APP_API_BASE_URL;


const useProductState = (url) =>{
const [data, setData] = useState([]);
const [loading, setLoading] = useState(true);
const [error, setError] = useState(null)

useEffect(()=>{
     async function init (){
        try{
        const response = await fetch(baseUrl + url)
        //console.log(response.json())
        if(response.ok){
            const json = await response.json();
        setData(json);
        
        }
        else{setError(response)}
        
        }
        catch(e){
            setError(e);
        }
        finally{setLoading(false)}
     }
     init();
  
}, [url]);
return {data, loading, error}
}

export default useProductState;