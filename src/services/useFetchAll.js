import { useEffect, useRef, useState } from "react"

const baseUrl = process.env.REACT_APP_API_BASE_URL;


 export default function useFetchAll(urls){
   const prevUrls = useRef([]); 

const [data, setData] = useState(null);
const [loading, setLoading] = useState(true);
const [error, setError] = useState(null)

useEffect(() => {
    if(areEqual(prevUrls.current, urls)){ 
     // console.log('prevUrl:', prevUrls.current, 'currentUlls: ', urls)
      setLoading(false);
      return;}
    prevUrls.current = urls;
    const promises = urls.map((url) =>
      fetch(baseUrl + url).then((response) => {
        if (response.ok) return response.json();
        console.log('url',url);
        throw response;
      })
    );

    Promise.all(promises)
      .then((json) => setData(json))
      .catch((e) => {
        console.error(e);
        setError(e);
      })
      .finally(() => setLoading(false));
    // eslint-disable-next-line
  }, [urls]);

return {data, loading, error}
}

function areEqual(array1, array2){
  //console.log('in areEquals function')
return (array1.length === array2.length &&
  array1.every((value, index) => value === array2[index]));
}

