import React from 'react';
import { Col, Row } from 'react-bootstrap';

const About = () => {
    return (
        <section className="container">
            <h1 className="text-primary fw-bold my-5">About</h1>
            <div className="bg-white shadow-lg rounded p-4 d-flex">
                <Row xs={1} md={2} className="g-4">
                <Col><img className="img-fluid" src="https://i.ibb.co/k1LzCV1/1614232110.jpg" alt="" /></Col>
                <Col>
                <h3 className="text-secondary fw-bolder">For BangladeshBy Bangladesh</h3>
                <p>Health Plus is one of the largest and most recognized private healthcare brands in Bangladesh. Known for its pioneering works in setting-up the first super-specialty Cardiac hospital within country. Health Plus is also widely acknowledged for bringing high quality diagnostic & specialized consultation facilities under a single roof through its now ubiquitous centers in all corners of Bangladesh. Around 2.1 million annual patient interactions, more than 5,000 employees, and upward of 800 consultant physicians countrywide.</p>
                </Col>
                </Row>
            </div>
            
        </section>
    );
};

export default About;