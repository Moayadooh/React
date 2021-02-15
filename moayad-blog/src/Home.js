import { useState } from "react";

const Home = () => {

    const [blogs, setBlogs] = useState([
        {title:"Plane", body:"fly in the air",author:"Eyad",id:1},
        {title:"Medical", body:"treat human beings",author:"Mohanned",id:2},
        {title:"Car", body:"move in the street",author:"Mohammed",id:3}
    ]);

    return (
        <div className="home">
            {blogs.map((blog)=> (
                <div className="blog-preview" key={blog.id}>
                    <h2>{blog.title}</h2>
                    <p>written by {blog.author}</p>
                </div>
            ))}
        </div>
      );
}

export default Home;