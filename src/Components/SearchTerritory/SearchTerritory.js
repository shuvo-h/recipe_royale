import React, { useEffect } from 'react';
import { useParams } from 'react-router';

const SearchTerritory = () => {
    const {searchTxt} = useParams();
    console.log(searchTxt);
    useEffect(()=>{
        fetch(`http://localhost:5000/tourExperience/title?search=${searchTxt}`,{
            method:"post",
            headers:{
                "content-type":"application/json"
            },
            body: JSON.stringify({searchTxt}),
        })
        .then()
        .then()
    },[searchTxt])
    return (
        <div>
            Rewrite the code mainly in backend side. create search text index first 
        </div>
    );
};

export default SearchTerritory;