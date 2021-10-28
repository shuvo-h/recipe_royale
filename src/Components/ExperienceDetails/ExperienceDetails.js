import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const ExperienceDetails = () => {
    const {id} = useParams("");
    const [details,setDetails] = useState({});
    const {img, place, rating, txt, visit_dt} = details;
    useEffect(()=>{
        fetch(`https://pacific-peak-55882.herokuapp.com/tourExperience/${id}`)
            .then(res=>res.json())
            .then(data=>setDetails(data))
    },[id])
    return (
        <div>
            <h3><u><i>I am the details of the experience you are looking for! </i></u></h3>
            <h3>{place}</h3>
            <img src={img} alt="" />
            <p>Rating: {rating}</p>
            <p>Visiting Date: {visit_dt}</p>
            <p>Reporting: {txt}</p>
        </div>
    );
};

export default ExperienceDetails;