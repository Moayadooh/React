import { useState } from "react";

function List() {

    const [blogs, setBlogs] = useState([
        {title:"Plane", body:"fly in the air",author:"Eyad",id:1},
        {title:"Medical", body:"treat human beings",author:"Mohanned",id:2},
        {title:"Car", body:"move in the street",author:"Mohammed",id:3}
    ]);

    //filter
    //const newBlog = blogs.filter((blog)=>blog.author==='Eyad');

    function handleDelete(id) {
        const newBlog = blogs.filter((blog)=>blog.id!==id);
        setBlogs(newBlog);
    }

    return (
        <div className="list">
            {blogs.map((blog)=> (
                <div className="blog-preview" key={blog.id}>
                    <h2>{blog.title}</h2>
                    <p>written by {blog.author}</p>
                    <button onClick={()=>handleDelete(blog.id)}>Delete Blog</button>
                </div>
            ))}
        </div>
      );
}

export default List;