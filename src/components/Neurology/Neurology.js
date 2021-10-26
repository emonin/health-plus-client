import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';

const Neurology = () => {
    return (
        <div className="container">
            <h1 className="text-primary fw-bold my-5">Neurology</h1>
            <div className="bg-white shadow-lg rounded p-5">
                <div className="border shadow rounded p-4">
                    <p className="text-secondary">
                        Diagnosis, prevention and treatment of disorder of nervous system.The Neurology department of Health Plus Hospital provides treatment for people with neurological disorders including diseases of the brain, spinal cord, peripheral nerves and muscles. The Department is committed in integrating its medical expertise for providing advanced Neurological care and treatment for our Patients. The department uses the latest technology and facilities, and is staffed by an experienced team of neurologists, nurses and technologists, who are committed to patient care.
                    </p>
                </div>
                <h4 className="fw-bold my-5">Doctors of Neurology<hr /></h4>

                <Row xs={1} md={4} className="g-4">
                    <Col>
                        <div className="shadow rounded h-100 text-center item">
                            <Card.Img variant="top" className="border p-3 img-fluid w-75 mt-4" src="https://i.ibb.co/kDGL56h/doctor.png" />
                            <div className="overlay fade-overlay">
                                <div className="middle-icon"><i className="fas fa-plus"></i><p className="fw-bolder fs-6">Make An Appointment</p></div>
                            </div>
                            <Card.Body>
                                <h6 className="fw-bold text-primary">Professor Dr. Sirajul Haque</h6>
                                <Card.Text className="text-secondary fw-Bolder">
                                    Specialist in Neurology & Internal Medicine Chief Consultant.</Card.Text>
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
                                <h6 className="fw-bold text-primary">Professor Dr. Md. Ashraf Ali</h6>
                                <Card.Text className="text-secondary fw-Bolder">
                                    Ex. Professor, Specialist in Medicine & Neurology Senior Consultant.</Card.Text>
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
                                <h6 className="fw-bold text-primary">Professor Dr. Shahrukh Ahmed</h6>
                                <Card.Text className="text-secondary fw-Bolder">
                                    Neurology & Medicine Specialist Senior Consultant.</Card.Text>
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
                                <h6 className="fw-bold text-primary">Professor Dr. M. A. Hannan</h6>
                                <Card.Text className="text-secondary fw-Bolder">
                                    Medicine Specialist & Neurologist Professor.</Card.Text>
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
                                <h6 className="fw-bold text-primary">Professor Dr. Mansur Habib</h6>
                                <Card.Text className="text-secondary fw-Bolder">
                                    Specialist in Neuromedicine & Medicine Professor of Neurology.</Card.Text>
                                <small className="text-dark">Health Plus</small>
                            </Card.Body>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    );
};

export default Neurology;