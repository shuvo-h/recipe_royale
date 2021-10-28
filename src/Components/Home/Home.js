import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import AllExperience from '../AllExperience/AllExperience';
import './home.css'

const Home = () => {
    const [searchTxt,setSearchTxt] = useState("");
    return (
        <div>
            <h1 className="text-center my-4">Explore you Tourist Exprience</h1>
            <div className="search-place mx-auto my-4">
                <label htmlFor="" className="border rounded">
                    <input onBlur={(e)=>setSearchTxt(e.target.value)} type="text" className="border-0"/>
                    <Link to={`/territoryFind/${searchTxt}`}><button className="border-0">Search</button></Link>
                </label>
            </div>
            <AllExperience></AllExperience>
        </div>
    );
};

export default Home;