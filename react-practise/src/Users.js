import React, { useEffect, useState } from 'react'
import './index.css'

function Users() {
    const [users, setUsers] = useState(null);
    useEffect(() => {

        fetch("https://jsonplaceholder.typicode.com/users").then(res => {
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

    }, [])
    return (
        <div className="users-table">
            <table>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>name</th>
                        <th>username</th>
                        <th>email</th>
                        <th>address/zipcode</th>
                    </tr>
                </thead>
                <tbody>
                    {users && users.map(user => (
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.username}</td>
                            <td>{user.email}</td>
                            <td>{user.address.zipcode}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Users
