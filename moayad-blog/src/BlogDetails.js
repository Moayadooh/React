import { useHistory, useParams } from "react-router-dom";
import useFetch from "./Tutorial/useFetch";

function BlogDetails() {

    const { id } = useParams();
    const { data: blog, isLoading, error } = useFetch('http://localhost:7000/blogs/' + id);

    const history = useHistory();
    function handleClick() {
        fetch('http://localhost:7000/blogs/' + blog.id, {
            method: 'DELETE'
        }).then(() => {
            history.push('/');
        })
    }

    return (
        <div className="blog-details">
            {isLoading && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {blog && (
                <article>
                    <h2>{blog.title}</h2>
                    <p>written by {blog.author}</p>
                    <div>{blog.body}</div>
                    <button onClick={handleClick}>Delete</button>
                </article>
            )}
        </div>
    );
}

export default BlogDetails;