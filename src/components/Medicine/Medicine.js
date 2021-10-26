import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';

const Medicine = () => {
    return (
        <div className="container">
            <h1 className="text-primary fw-bold my-5">Medicine</h1>
            <div className="bg-white shadow-lg rounded p-5">
                <div className="border shadow rounded p-4">
                    <p className="text-secondary">
                    Our department embodies excellence, inspiration and empowerment in caring for the patients. Staff of the various specialties are world leading experts in their respective fields.To maintain and further develop clinical service by providing superior patient care, by always striving to remain a leading referral centre for patients, by promoting the development and implementation of innovative advances in clinical management.
                    </p>
                </div>
                <h4 className="fw-bold my-5">Doctors of Medicine<hr /></h4>

                <Row xs={1} md={4} className="g-4">
                    <Col>
                        <div className="shadow rounded h-100 text-center item">
                            <Card.Img variant="top" className="border p-3 img-fluid w-75 mt-4" src="https://i.ibb.co/kDGL56h/doctor.png" />
                            <div className="overlay fade-overlay">
                                <div className="middle-icon"><i className="fas fa-plus"></i><p className="fw-bolder fs-6">Make An Appointment</p></div>
                            </div>
                            <Card.Body>
                                <h6 className="fw-bold text-primary">Dr. Zubayer Ahmed</h6>
                                <Card.Text className="text-secondary fw-Bolder">Specialist in Arthritis & Lupus in Women & Children Medicine.</Card.Text>
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
                                <Card.Text className="text-secondary fw-Bolder">Medicine Specialist Senior Consultant.</Card.Text>
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
                                <Card.Text className="text-secondary fw-Bolder">Medicine & Neuromedicine Specialist Former Professor.</Card.Text>
                                <small className="text-dark">Health Plus</small>
                            </Card.Body>
                        </div>
                    </Col>
                    <Col>
                        <div className="shadow rounded h-100 text-center item">
                            <Card.Img variant="top" className="border p-3 img-fluid w-75 mt-4" src="https://i.ibb.co/kDGL56h/doctor.png" />
                            <div className="overlay fade-overlay">
                                <div className="middle-icon"><i className="fas fa-plus"></i><p className="fw-bolder fs-6">Make An Appointment</p></div>
                            </div>
                            <Card.Body>
                                <h6 className="fw-bold text-primary">Prof. Dr. Md. Abdul Jalil Chowdhury</h6>
                                <Card.Text className="text-secondary fw-Bolder">Ex. Professor, Internal Medicine.</Card.Text>
                                <small className="text-dark">Health Plus</small>
                            </Card.Body>
                        </div>
                    </Col>
                    <Col>
                        <div className="shadow rounded h-100 text-center item">
                            <Card.Img variant="top" className="border p-3 img-fluid w-75 mt-4" src="https://i.ibb.co/wJyB67h/doctor8.png" />
                            <div className="overlay fade-overlay">
                                <div className="middle-icon"><i className="fas fa-plus"></i><p className="fw-bolder fs-6">Make An Appointment</p></div>
                            </div>
                            <Card.Body>
                                <h6 className="fw-bold text-primary">Professor. Dr. Md. Ridwanur Rahman</h6>
                                <Card.Text className="text-secondary fw-Bolder">Medicine & Neuromedicine Specialist Head, Universal Medical Research.</Card.Text>
                                <small className="text-dark">Health Plus</small>
                            </Card.Body>
                        </div>
                    </Col>
                    <Col>
                        <div className="shadow rounded h-100 text-center item">
                            <Card.Img variant="top" className="border p-3 img-fluid w-75 mt-4" src="https://i.ibb.co/GHGnDcx/doctor-3.png" />
                            <div className="overlay fade-overlay">
                                <div className="middle-icon"><i className="fas fa-plus"></i><p className="fw-bolder fs-6">Make An Appointment</p></div>
                            </div>
                            <Card.Body>
                                <h6 className="fw-bold text-primary">Prof. Dr. Samiran Kumar Saha</h6>
                                <Card.Text className="text-secondary fw-Bolder">Medicine Specialist Senior Consultant,Honorary Professor.</Card.Text>
                                <small className="text-dark">Health Plus</small>
                            </Card.Body>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    );
};

export default Medicine;