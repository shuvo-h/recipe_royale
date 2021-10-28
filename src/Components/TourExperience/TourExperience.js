import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const TourExperience = (props) => {
    const {img, place, _id} = props.experience;
    return (
        <Card className="g-3" style={{ width: '18rem' }}>
            <Card.Img variant="top" src={img} />
            <Card.Body>
                <Card.Title>{place}</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
                </Card.Text>
                <Link to={`/tourexperience/detalis/${_id}`}><Button style={{backgroundColor:`rgba(${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)})`}}>Know details</Button></Link>
            </Card.Body>
        </Card>
    );
};

export default TourExperience;