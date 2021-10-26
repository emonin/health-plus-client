import React from 'react';
import { Card, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const HomeService = (props) => {
    const { name , desc , img , key} = props.homeService; 
    return (
        // <Col onClick={()=> keyHandler(key)}>
        <Col>
            <Card className="shadowhover h-100">
                <Card.Img variant="top" className="img-fluid w-25 ms-3 mt-3" src={img} />
                <Card.Body>
                <Card.Title className="fw-bold text-primary">{name}</Card.Title>
                <Card.Text className="text-secondary">{desc.slice(0 , 150)} . . .</Card.Text>
                <Link to={key}><Button className="" variant="primary">More Details</Button></Link>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default HomeService;