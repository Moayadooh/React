import { useState } from "react";

function UseState() {
    
    const[name, setName] = useState('Eyad');
    const[age, setAge] = useState(1);
    function handleClick() {
        setName("Moayad");
        setAge(23);
    }

    return (
        <div className="state">
            <p>{name} is {age} years old</p>
            <button onClick={handleClick}>Click</button>
        </div>
      );
}

export default UseState;