import useFetch from './useFetch';

function Fetching() {

    // const [Blogs,setBlogs] = useState(null);
    // const [isLoading,setIsLoading] = useState(true);
    // const [error,setError] = useState(null);

    // useEffect(() => {
    //     setTimeout(() => {
    //         fetch("http://localhost:7000/blogs").then(res => {
    //             //console.log(res);
    //             if (!res.ok)
    //                 throw Error("Could not fetch the data"); //return our own error message when catch the error
    //             return res.json();
    //         }).then(data => {
    //             //console.log(data);
    //             setBlogs(data);
    //             setIsLoading(false);
    //             setError(null); //remove the error message in case the error is fixed
    //         }).catch(err => {
    //             //console.log(err.message);
    //             setError(err.message);
    //             setIsLoading(false);
    //         });
    //     }, 1000); //wait for 1 second
    // }, []);

    // "data:blogs" --> put value of "data" in variable called "blogs"
    const {data:blogs, isLoading, error} = useFetch("http://localhost:7000/blogs"); //Custom Hook

    return (
        <div className="fetch">
            {isLoading && <div>Loading....</div>}
            {error && <div>{error}</div>}
            {blogs && <h2>{ blogs[0].title }</h2>}
            {blogs && <p>Written by {blogs[0].author}</p>}
        </div>
    );
}

export default Fetching;