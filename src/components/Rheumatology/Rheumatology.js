import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';

const Rheumatology = () => {
    return (
        <div className="container">
            <h1 className="text-primary fw-bold my-5">Rheumatology</h1>
            <div className="bg-white shadow-lg rounded p-5">
                <div className="border shadow rounded p-4">
                    <p className="text-secondary">
                    Rheumatology provides advanced diagnosis and treatments for systematic autoimmune diseases, rheumatoid arthritis, lupus, and other musculoskeletal disorders affecting children and adults. Our goal is to provide comprehensive treatment and other therapies to help you to live life to its fullest.Our team has expertise in many areas including rheumatoid arthritis, psoriatic arthritis, lupus, myositis and other autoimmune and rheumatic diseases. We also have expertise in other areas such as amyloidosis, soft tissue disease, bursitis, tendonitis, osteoarthritis, gout and others. Rheumatology department of Health Plus Hospital aiming at providing patients of all ages with possible care in managing musculoskeletal disorders .The department boasts a well trained and highly skilled team of doctors specializing in a number of fields. The team is ably backed by a group of specialty trained nurses and physical rehabilitation therapists.
                    </p>
                </div>
                <h4 className="fw-bold my-5">Doctors of Rheumatology<hr /></h4>

                <Row xs={1} md={4} className="g-4">
                    <Col>
                        <div className="shadow rounded h-100 text-center item">
                            <Card.Img variant="top" className="border p-3 img-fluid w-75 mt-4" src="https://i.ibb.co/kDGL56h/doctor.png" />
                            <div className="overlay fade-overlay">
                                <div className="middle-icon"><i className="fas fa-plus"></i><p className="fw-bolder fs-6">Make An Appointment</p></div>
                            </div>
                            <Card.Body>
                                <h6 className="fw-bold text-primary">Dr. Md. Abu Shahin</h6>
                                <Card.Text className="text-secondary fw-Bolder">
                                    Medicine & Rheumatology Specialist Associate Professor.</Card.Text>
                                <small className="text-dark">Health Plus</small>
                            </Card.Body>
                        </div>
                    </Col>
                    <Col>
                        <div className="shadow rounded h-100 text-center item">
                            <Card.Img variant="top" className="border p-3 img-fluid w-75 mt-4" src="https://i.ibb.co/0YGcWqF/doctor6.png" />
                            <div className="overlay fade-overlay">
                                <div className="middle-icon"><i className="fas fa-plus"></i><p className="fw-bolder fs-6">Make An Appointment</p></div>
                            </div>
                            <Card.Body>
                                <h6 className="fw-bold text-primary">Dr. Shah Habibur Rahman</h6>
                                <Card.Text className="text-secondary fw-Bolder">
                                    Medicine & Rheumatology Specialist Associate Professo.</Card.Text>
                                <small className="text-dark">Health Plus</small>
                            </Card.Body>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    );
};

export default Rheumatology;