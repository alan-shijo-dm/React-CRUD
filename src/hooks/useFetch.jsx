import { useEffect, useState } from "react";

const useFetch = (url) => {
    const [data, setData] = useState([]);
    useEffect(()=>{
        (async() => {
            try{
                const response = await fetch(url);
                const data = await response.json();
                setData(data);
            }catch(error){
                console.error(error);
            }
        })();
    }, [url]);
    return data;
}

export default useFetch