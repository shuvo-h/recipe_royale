import React from 'react';
import { Card, Button, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const TourExperience = (props) => {
    const {img, place, _id} = props.experience;
    return (
            <Col className="gx-3">
                <Card className="p-2 shadow" style={{ width: '18rem' }}>
                    <Card.Img className="rounded" variant="top" src={img} />
                    <Card.Body>
                        <Card.Title>{place}</Card.Title>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                        </Card.Text>
                        <Link to={`/tourexperience/detalis/${_id}`} className="d-flex justify-content-center text-decoration-none"><Button className="shadow" style={{backgroundColor:`rgba(${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)})`}}>Know details</Button></Link>
                    </Card.Body>
                </Card>
            </Col>
    );
};

export default TourExperience;