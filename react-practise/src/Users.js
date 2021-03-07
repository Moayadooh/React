import React, { useEffect, useState } from 'react'
import './index.css'

function Users() {
    const [users, setUsers] = useState(null);
    useEffect(() => {

        fetch("http://localhost:7000/users").then(res => {
            //console.log(res);
            if (!res.ok)
                alert("Something went wrong");
            return res.json();
        }).then(data => { // recieve data from 'res.json()'
            //console.log(data);
            setUsers(data);
        }).catch(err => {
            console.log(err.message);
        });

    }, [handleDelete])

    function handleDelete(id) {
        fetch("http://localhost:7000/users/" + id, { method: "DELETE" })
    }

    // var EditElements = "<div style='text-align:center'>";
    // EditElements += "<div><button onClick='handleCancle()'>Save Changes</button></div>";
    // EditElements += "<div><button>Cancel</button></div>";
    // EditElements += "</div>";
    // function handleEdit(id){
    //     document.getElementById("edit").innerHTML = EditElements;
    // }
    // function handleCancle(){
    //     document.getElementById("edit").innerHTML = "";
    // }

    return (
        <div className="users-table">
            <table>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>name</th>
                        <th>username</th>
                        <th>email</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {users && users.map(user => (
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.username}</td>
                            <td>{user.email}</td>
                            {/* <td onClick={() => handleEdit(user.id)}><button>Edit</button></td> */}
                            <td><button>Edit</button></td>
                            <td onClick={() => handleDelete(user.id)}><button>Delete</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div id="edit">

            </div>
        </div>
    )
}

export default Users
