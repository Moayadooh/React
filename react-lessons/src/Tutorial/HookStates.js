import { useState, useEffect } from "react";

function Hook() {
    
    const[name, setName] = useState('Eyad');
    const[age, setAge] = useState(1);
    function handleClick() {
        setName("Moayad");
        setAge(23);
    }

    //Called when render the page
    useEffect(()=>{
        console.log("useEffect ran");
    });

    // useEffect(()=>{
    //     console.log("useEffect ran");
    // }, []); // [] empty array will make useEffect called only once

    // useEffect(()=>{
    //     console.log("useEffect ran");
    // }, [name]); // [name] will make useEffect called initially and whenever the "name" variable is changed

    return (
        <div className="hook">
            <p>{name} is {age} years old</p>
            <button onClick={handleClick}>Click</button>
        </div>
      );
}

export default Hook;