import { useEffect, useState } from "react";

function Fetching() {

    const [Blogs,setBlogs] = useState(null);

    useEffect(()=>{
        fetch("http://localhost:7000/blogs").then(res =>{
            return res.json();
        }).then(data=>{
            console.log(data);
        })
    }, []);

    return(
        <div className="feth">

        </div>
    );
}

export default Fetching;