import { useState } from "react";
import { Link } from "react-router-dom";
import useFetch from "./Tutorial/useFetch";

const Home = () => {

    // const [blogs, setBlogs] = useState([
    //     { title: "Plane", body: "fly in the air", author: "Eyad", id: 1 },
    //     { title: "Medical", body: "treat human beings", author: "Mohanned", id: 2 },
    //     { title: "Car", body: "move in the street", author: "Mohammed", id: 3 }
    // ]);

    const {data: blogs, isLoading, error} = useFetch('http://localhost:7000/blogs');

    return (
        <div className="home">
            {/* {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <Link to={`/blogs/${blog.id}`}>
                        <h2>{blog.title}</h2>
                        <p>written by {blog.author}</p>
                    </Link>
                </div>
            ))} */}

            {blogs && blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <Link to={`/blogs/${blog.id}`}>
                        <h2>{blog.title}</h2>
                        <p>written by {blog.author}</p>
                    </Link>
                </div>
            ))}
        </div>
    );
}

export default Home;