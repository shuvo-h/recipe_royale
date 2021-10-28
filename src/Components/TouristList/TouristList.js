import React, { useEffect, useState } from 'react';
import { Row, Table } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';
import User from './User/User';

const TouristList = () => {
    const {user} = useAuth();
    const [users,setUsers] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/users/list')
            .then(res=>res.json())
            .then(data=>setUsers(data))
    },[])
    return (
        <div className="container text-center">
            <h2>List of All Users</h2>
            
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Joined date</th>
                        <th>Password</th>
                        {
                            user.email === "shuvowriter@gmail.com" && <th>Delete</th>  
                        }
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map(user=><User user={user} key={user._id}></User>)
                    }
                </tbody>
            </Table>
        </div>
    );
};

export default TouristList;