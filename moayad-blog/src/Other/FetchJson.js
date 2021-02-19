import { useEffect, useState } from "react";

function Fetching() {

    const [Blogs,setBlogs] = useState(null);
    const [isLoading,setIsLoading] = useState(true);
    const [error,setError] = useState(null);

    useEffect(() => {
        setTimeout(() => {
            fetch("http://localhost:7000/blogs").then(res => {
                //console.log(res);
                if (!res.ok)
                    throw Error("Could not fetch the data"); //return our own error message when catch the error
                return res.json();
            }).then(data => {
                //console.log(data);
                setBlogs(data);
                setIsLoading(false);
                setError(null); //remove the error message in case the error is fixed
            }).catch(err => {
                //console.log(err.message);
                setError(err.message);
                setIsLoading(false);
            });
        }, 1000); //wait for 1 second
    }, []);

    return (
        <div className="fetch">
            {isLoading && <div>Loading....</div>}
            {error && <div>{error}</div>}
            {Blogs && <h2>{ Blogs[0].title }</h2>}
            {Blogs && <p>Written by {Blogs[0].author}</p>}
        </div>
    );
}

export default Fetching;