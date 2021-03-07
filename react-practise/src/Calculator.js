import React, { useState } from 'react'

function Calculator() {
    const name = "Moayad";

    var [num1, setNum1] = useState('');
    var [num2, setNum2] = useState('');
    var [sum, setSum] = useState(null);
    function Calculate() {
        setSum(parseInt(num1) + parseInt(num2));
    }
    return (
        <div style={{ textAlign: "center", marginTop: "50px" }}>
            <h1>Title</h1>
            <p>{name}</p>
            <table style={{ margin: "auto" }}>
                <tbody>
                    <tr><td>First Value</td><td><input type="text" value={num1} onChange={(e) => setNum1(e.target.value)} /></td></tr>
                    <tr><td>Second Value</td><td><input type="text" value={num2} onChange={(e) => setNum2(e.target.value)} /></td></tr>
                    <tr><td></td><td><button onClick={Calculate}>Plus</button></td></tr>
                </tbody>
            </table>
            { sum && <p>Sum is {sum}</p>}
        </div>
    )
}

export default Calculator
