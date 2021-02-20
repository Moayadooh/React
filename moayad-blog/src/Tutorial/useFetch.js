import { useEffect, useState } from 'react';

function useFetch(url) {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const abortCont = new AbortController();

        setTimeout(() => {
            fetch(url, { signal: abortCont.signal }).then(res => {
                //console.log(res);
                if (!res.ok)
                    throw Error("Could not fetch the data"); //return our own error message when catch the error
                return res.json();
            }).then(data => {
                setData(data);
                setIsLoading(false);
                setError(null); //remove the error message in case the error is fixed
            }).catch(err => {
                //check if fetch aborted. Example: navigating to other page before the data is fetched
                if (err.name === 'AbortError') {
                    console.log('fetch aborted')
                } else {
                    //console.log(err.message);
                    setError(err.message);
                    setIsLoading(false);
                }
            });
        }, 1000); //wait for 1 second

        return () => abortCont.abort();
    }, [url]);

    return { data, isLoading, error };
}

export default useFetch;