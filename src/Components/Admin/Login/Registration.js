import React, {  useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth'

const Registration = () => {
    const {newRegistration,updateUserInfo,auth,user} = useAuth();
    const [newName,setNewName] = useState('');
    const [newEmail,setNewEmail] = useState('');
    const [newPass,setNewPass] = useState('');

    const newUser = {
        displayName : newName,
        email: newEmail,
        password: newPass,
        joined: (new Date()).toLocaleString()
    }
    
    const handleRegistrationForm = () =>{
        newRegistration(auth,newEmail,newPass)
        .then(result=>{
            updateUserInfo(auth.currentUser, newUser)
            updateUserToDB();
            window.location.reload();
            alert("Account created successfully")
        })
    }
    const updateUserToDB = () =>{
        fetch('https://pacific-peak-55882.herokuapp.com/newuser',{
            method: "POST",
            headers: {
                "content-type":"application/json"
            },
            body: JSON.stringify(newUser)
        })
        .then(res=>res.json())
        .then(data=>{
            if (data.insertedId) {
                alert("data sent to mongo")
            }
        })
    }
    return (
        <div>
            Registration form
            <div >
                <label htmlFor="">
                    Name:
                    <input onBlur={(e)=>setNewName(e.target.value)} type="text" placeholder="write your name" />
                </label><br />
                <label htmlFor="">
                    Email:
                    <input onBlur={(e)=>setNewEmail(e.target.value)} type="email" placeholder="write email address"/>
                </label><br />
                <label htmlFor="">
                    Password:
                    <input onBlur={(e)=>setNewPass(e.target.value)} type="password" placeholder="type your password"/>
                </label>
                <button onClick={handleRegistrationForm} type="">Submit</button>
            </div>
            <p>Already Have an account?</p>
            <Link to='/login'>Login here</Link>
        </div>
    );
};

export default Registration;