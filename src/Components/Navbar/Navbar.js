import React, { useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import './navbar.css';
import { IconContext } from "react-icons";
import { GiSplitCross } from 'react-icons/gi';
import { VscThreeBars } from 'react-icons/vsc';
import useAuth from '../../hooks/useAuth';


const NavBar = () => {
    const [toggle,setToggle] = useState(false);
    const [screenWidth,setScreenWidth] = useState(window.innerWidth);
    const {user, logOut} = useAuth();
    const history = useHistory();
    useEffect(()=>{
        const changeWidth = () =>{
            setScreenWidth(window.innerWidth);
        }
        window.addEventListener('resize',changeWidth);
        return () => {
            window.removeEventListener('resize',changeWidth);
        }
    },[])

    const handleLogout = () =>{
        logOut();
        history.push('/home')
    }
    return (
        <nav>
            <div className="brand-name">
                Tourist Territory
            </div>
            <div >
                {
                    (toggle || screenWidth > 688) && <div className="nav-menu">
                        <Link to="/home" className="nav-item">Home</Link>
                        <Link to="/" className="nav-item">item</Link>
                        <Link to="/tourist-list" className="nav-item">Tourist List</Link>
                        {
                            user.email ? <Link to="/login" onClick={handleLogout} className="nav-item">Log Out({user.displayName })</Link> : <Link to="/login" className="nav-item">Login</Link>
                        }
                    </div>
                }
                <div className="nav-btn">
                    <div onClick={()=>setToggle(!toggle)} >
                        {
                            toggle ? <IconContext.Provider  value={{ size:'30' ,color: "red"}}><GiSplitCross /></IconContext.Provider>
                            : <IconContext.Provider value={{size:'30' , color: "white"}}><VscThreeBars /></IconContext.Provider>
                        }
                    </div>
                </div>
            </div>
            
        </nav>
    );
};

export default NavBar;