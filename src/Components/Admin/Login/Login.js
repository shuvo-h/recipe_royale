import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Login = () => {
    const {signInWithGoogle,signInExistUser, auth, setIsLoading} = useAuth();
    const location = useLocation();
    const history = useHistory();
    const [existEmail,setExistEmail] = useState('');
    const [existPassword,setExistPassword] = useState("");

    const hangleGoogleLogin = () =>{
        setIsLoading(true);
        signInWithGoogle()
        .then(result=>{
            history.push(location?.state?.from ? location?.state?.from : "/home")
            setIsLoading(false);
        })
    }
    
    const handleLogin = (e) =>{
        setIsLoading(true);
        signInExistUser(auth, existEmail,existPassword)
        .then(result=>{
            history.push(location?.state?.from ? location?.state?.from : "/home")
            setIsLoading(false);
        })
        e.preventDefault();
    }
    
    return (
        <div className="container text-center my-4">
            <h2 className="mb-4">Login Form</h2>
            <hr />
            <div className="d-flex justify-content-center">
                <form className=" d-flex flex-column align-items-end">
                    <label htmlFor="">
                        Email:
                        <input onBlur={(e)=>setExistEmail(e.target.value)} type="text" placeholder="Write email address" />
                    </label> <br />
                    <label htmlFor="">
                        Password:
                        <input onBlur={(e)=>setExistPassword(e.target.value)} type="text" placeholder="Write password" />
                    </label><br />
                    <button onClick={handleLogin} className="mx-auto btn-primary rounded fw-bolder" type="submit">Login</button>
                </form>
            </div>
            <div className="mt-3">
                Don't have an account? 
                <Link to='/registration'>Create Account</Link>
            </div>
            <button onClick={hangleGoogleLogin} className="my-5 btn-primary rounded">Login with google</button>
        </div>
    );
};

export default Login;