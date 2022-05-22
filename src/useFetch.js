import { useState,useEffect } from 'react';

const useFetch = (url) => {
    const [data,setData] = useState(null);  
    const [isPending, setIsPending] = useState(true);
    const [error,setError] = useState(null);

    useEffect(()=>{
        const abortCont = new AbortController();

        setTimeout(() => {
            fetch(url, { signal: abortCont.signal })
                .then(res =>{
                    // console.log(res)
                    if(!res.ok){
                        throw Error('resource could not be fetched');
                    }
                    return res.json()
                })
                .then(data =>{
                    // console.log(data);
                    setData(data);
                    setIsPending(false);
                    setError(null);
                })
                .catch(err =>{
                    // console.log(err.message);
                    if(err.name === 'AbortError'){
                        console.log('fetched aborted');
                    }
                    setError(err.message);
                    setIsPending(false);
                });
        }, 1000);
        return () => abortCont.abort();//aborts whatever fetch it is associated with

    }, [url]);//func that's going to run every time there's a rerender
    return { data, isPending, error };
}
 
export default useFetch;