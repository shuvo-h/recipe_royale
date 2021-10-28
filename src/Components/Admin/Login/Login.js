import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Login = () => {
    const {signInWithGoogle,signInExistUser, auth, setIsLoaging} = useAuth();
    const location = useLocation();
    const history = useHistory();
    const [existEmail,setExistEmail] = useState('');
    const [existPassword,setExistPassword] = useState("");

    const hangleGoogleLogin = () =>{
        setIsLoaging(true);
        signInWithGoogle()
            .then(result=>{
                history.push(location?.state?.from ? location?.state?.from : "/home")
            })
    }
    
    const handleLogin = (e) =>{
        signInExistUser(auth, existEmail,existPassword)
            .then(result=>{
                history.push(location?.state?.from ? location?.state?.from : "/home")
            })
        e.preventDefault();
    }
    
    return (
        <div>
            <form >
                <label htmlFor="">
                    Email:
                    <input onBlur={(e)=>setExistEmail(e.target.value)} type="text" placeholder="Write email address" />
                </label> <br />
                <label htmlFor="">
                    Password:
                    <input onBlur={(e)=>setExistPassword(e.target.value)} type="text" placeholder="Write password" />
                </label><br />
                <button onClick={handleLogin} type="submit">Login</button>
            </form>
            <div>
                Don't have an account? 
                <Link to='/registration'>Create Account here</Link>
            </div>
            <button onClick={hangleGoogleLogin} className="my-5 btn-primary rounded">Login with google</button>
        </div>
    );
};

export default Login;