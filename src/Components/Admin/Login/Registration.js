import React, {  useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './registrartion.css';

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
    
    const handleRegistrationForm = (e) =>{
        newRegistration(auth,newEmail,newPass)
        .then(result=>{
            updateUserInfo(auth.currentUser, newUser)
            updateUserToDB();
            window.location.reload();
            alert("Account created successfully")
        })
        e.preventDefault();
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
        <div className="registration-form container text-center my-4">
            <h2 className="d-block my-4">Registration form</h2>
            <div className="d-flex justify-content-center">
                <form className=" d-flex flex-column align-items-end">
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
                    <button onClick={handleRegistrationForm} className="mx-auto my-3 border rounded btn-primary fw-bold px-4 py-1" type="">Submit</button>
                </form>
            </div>
            Already Have an account?
            <Link to='/login'>Login here</Link>
        </div>
    );
};

export default Registration;