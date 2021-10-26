import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';

const Ent = () => {
    return (
        <div className="container">
            <h1 className="text-primary fw-bold my-5">ENT</h1>
            <div className="bg-white shadow-lg rounded p-5">
                <div className="border shadow rounded p-4">
                    <p className="text-secondary">
                        The ENT Department at Health Plus provides diagnosis and treatment of disorders of the head and neck, including particularly the ears, nose, and throat. The department of ENT offers the best care for all ENT related  head and neck problems. It also offering the complete range of ENT services under one roof. The Centre is staffed by highly qualified and experienced ENT Surgeon. We adopt an evidence based and multi disciplinary approach to diagnosing and healing patients.You will have an entire medical team supported by skilled hearing therapists (audiologists), communication and language (auditory verbal) development therapists, speech and language therapists, and nurses who are professionally qualified in this field, focused on your healing journey.
                    </p>
                </div>
                <h4 className="fw-bold my-5">Doctors of ENT<hr /></h4>

                <Row xs={1} md={4} className="g-4">
                    <Col>
                        <div className="shadow rounded h-100 text-center item">
                            <Card.Img variant="top" className="border p-3 img-fluid w-75 mt-4" src="https://i.ibb.co/kDGL56h/doctor.png" />
                            <div className="overlay fade-overlay">
                                <div className="middle-icon"><i className="fas fa-plus"></i><p className="fw-bolder fs-6">Make An Appointment</p></div>
                            </div>
                            <Card.Body>
                                <h6 className="fw-bold text-primary">Major (Rtd.) Professor Dr. M. Motahar Hossain</h6>
                                <Card.Text className="text-secondary fw-Bolder">
                                    Ear Nose Throat & Head-Neck Surgeon Expert in ENT Microsurger.</Card.Text>
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
                                <h6 className="fw-bold text-primary">Dr. M. R. Islam</h6>
                                <Card.Text className="text-secondary fw-Bolder">
                                    Ear Nose Throat & Head-Neck Surgeon Consultant, Ex. Consultant.</Card.Text>
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
                                <h6 className="fw-bold text-primary">Professor Dr. Sabah Uddin Ahmed</h6>
                                <Card.Text className="text-secondary fw-Bolder">
                                    E.N.T Specialist & Head-Neck Surgeon Ex. Professor & Head (E.N.T).</Card.Text>
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
                                <h6 className="fw-bold text-primary">Professor Dr. SK Nurul Fattah Rumi</h6>
                                <Card.Text className="text-secondary fw-Bolder">
                                    Ear, Nose, Throat, Head-Neck Specialist & Surgeon Professor.</Card.Text>
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
                                <h6 className="fw-bold text-primary">Dr. K. M. Mamun Murshed</h6>
                                <Card.Text className="text-secondary fw-Bolder">
                                    Ear-Nose-Throat Specialist & Head-Neck Surgeon Associate Professor.</Card.Text>
                                <small className="text-dark">Health Plus</small>
                            </Card.Body>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    );
};

export default Ent;