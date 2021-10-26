import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';

const Nephrology = () => {
    return (
        <div className="container">
            <h1 className="text-primary fw-bold my-5">Nephrology</h1>
            <div className="bg-white shadow-lg rounded p-5">
                <div className="border shadow rounded p-4">
                    <p className="text-secondary">
                        Health Plus equipped with state of the art technical support and is dedicated to providing the best of care and patients suffering from kidney issues. Nephrology is the discipline that deals with the treatment of conditions that affect kidneys . We provide expert diagnosis and treatment of all forms of kidney diseases.
                    </p>
                </div>
                <h4 className="fw-bold my-5">Doctors of Nephrology<hr /></h4>

                <Row xs={1} md={4} className="g-4">
                    <Col>
                        <div className="shadow rounded h-100 text-center item">
                            <Card.Img variant="top" className="border p-3 img-fluid w-75 mt-4" src="https://i.ibb.co/kDGL56h/doctor.png" />
                            <div className="overlay fade-overlay">
                                <div className="middle-icon"><i className="fas fa-plus"></i><p className="fw-bolder fs-6">Make An Appointment</p></div>
                            </div>
                            <Card.Body>
                                <h6 className="fw-bold text-primary">Professor. Dr. Mohammad Mohsin</h6>
                                <Card.Text className="text-secondary fw-Bolder">
                                    Internal Medicine & Kidney Specialist Special Interest Rheumatology.</Card.Text>
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
                                <h6 className="fw-bold text-primary">Prof. Dr. Md. Monzur Rahman (Galib)</h6>
                                <Card.Text className="text-secondary fw-Bolder">Kidney Diseases & Medicine Specialist Associate Professor.</Card.Text>
                                <small className="text-dark">Health Plus</small>
                            </Card.Body>
                        </div>
                    </Col>
                    <Col>
                        <div className="shadow rounded h-100 text-center item">
                            <Card.Img variant="top" className="border p-3 img-fluid w-75 mt-4" src="https://i.ibb.co/vwYJYjm/doctor2.png" />
                            <div className="overlay fade-overlay">
                                <div className="middle-icon"><i className="fas fa-plus"></i><p className="fw-bolder fs-6">Make An Appointment</p></div>
                            </div>
                            <Card.Body>
                                <h6 className="fw-bold text-primary">Professor. Dr. M A Faiz</h6>
                                <Card.Text className="text-secondary fw-Bolder">Kidney Disease & Medicine Specialist Consultant.</Card.Text>
                                <small className="text-dark">Health Plus</small>
                            </Card.Body>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    );
};

export default Nephrology;