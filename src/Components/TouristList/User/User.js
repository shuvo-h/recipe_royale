import React from 'react';
import useAuth from '../../../hooks/useAuth';

const User = (props) => {
    const {user} = useAuth();
    const {displayName, email, joined, password, _id} = props.user;
    
    
    const handleDeleteUser = (id) =>{
        let permission = window.confirm(`Do you want to delete ${displayName}?`);
        
        if (permission) {
            fetch(`http://localhost:5000/user/delete/${id}`,{
                method: "DELETE",
            })
            .then(res=>res.json())
            .then(data=>{
                console.log(data);
            })  
        }
   
    }
    return (
        <tr>
            <td>{displayName}</td>
            <td>{email}</td>
            <td>{joined}</td>
            <td>{password}</td>
            {
                user.email === "shuvowriter@gmail.com" && <td><button onClick={()=>handleDeleteUser(_id)}>X</button></td>
            }
        </tr>
    );
};

export default User;