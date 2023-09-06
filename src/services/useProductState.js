import { useEffect, useRef, useState } from "react"

const baseUrl = process.env.REACT_APP_API_BASE_URL;


const useProductState = (url) =>{
    const isMountedRef = useRef(false);
const [data, setData] = useState([]);
const [loading, setLoading] = useState(true);
const [error, setError] = useState(null)

useEffect(()=>{
    isMountedRef.current = true;
     async function init (){
        try{
        const response = await fetch(baseUrl + url)
        //console.log(response.json())
        if(response.ok){
            const json = await response.json();
       if(isMountedRef.current) setData(json);
        
        }
        else{throw response;}
        
        }
        catch(e){
           if(isMountedRef.current) setError(e);
        }
        finally{if(isMountedRef.current)setLoading(false)}
     }
     init();
     return () => isMountedRef.current = false;
  
}, [url]);
return {data, loading, error}
}

export default useProductState;