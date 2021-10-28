import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import TourExperience from '../TourExperience/TourExperience';

const AllExperience = () => {
    const [tourExperiences,setTourExperiences] = useState([]);
    const [pageCount,setPageCount] = useState(0);
    const [currentPage,setCurrentPage] = useState(0);
    const size = 10;
    useEffect(()=>{
        fetch(`http://localhost:5000/tourExperiences?page=${currentPage}&&size=${size} `)
            .then(res=>res.json())
            .then(data=>{
                setTourExperiences(data.experiences)
                const count = data.count;
                const pages = Math.ceil(count/size);
                setPageCount(pages);
            })
    },[currentPage])
    return (
        <>
            <Row className="g-2">
                {
                    tourExperiences.map(experience=><TourExperience experience={experience} key={experience._id}></TourExperience>)
                }
            </Row>
            <div className="text-center py-4">
                {
                    [...Array(pageCount).keys()].map(number=><button onClick={()=>setCurrentPage(number)} className={currentPage === number? 'btn-success m-1 border-0 rounded' : " m-1 border-0 rounded "} key={number}>{number + 1}</button>)
                }
            </div>
        </>
    );
};

export default AllExperience;