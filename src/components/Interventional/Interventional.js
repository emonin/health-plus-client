import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';

const Interventional = () => {
    return (
        <div className="container">
            <h1 className="text-primary fw-bold my-5">Interventional Cardiology</h1>
            <div className="bg-white shadow-lg rounded p-5">
                <div className="border shadow rounded p-4">
                    <p className="text-secondary">
                        We believe you deserve nothing less than the very best in cardiovascular care. That is why Health Plus has assembled a team of superb cardiologists, cardiac surgeons, and special trained nurse, who are skilled in providing the newest available diagnostics and treatments. Our doctors have the expertise to personalize the right treatment plan for you, whether you’re struck with a medical emergency like a heart attack or you’re dealing with an ongoing issue such as arrhythmia.Cardiovascular disease is a general term referring to conditions that affect the heart and blood vessels and cardiology is the medical specialty that treats these diseases.
                    </p>
                </div>
                <h4 className="fw-bold my-5">Doctors of Interventional Cardiology<hr /></h4>

                <Row xs={1} md={4} className="g-4">
                    <Col>
                        <div className="shadow rounded h-100 text-center item">
                            <Card.Img variant="top" className="border p-3 img-fluid w-75 mt-4" src="https://i.ibb.co/kDGL56h/doctor.png" />
                            <div className="overlay fade-overlay">
                                <div className="middle-icon"><i className="fas fa-plus"></i><p className="fw-bolder fs-6">Make An Appointment</p></div>
                            </div>
                            <Card.Body>
                                <h6 className="fw-bold text-primary">Professor Dr. Abduz Zaher</h6>
                                <Card.Text className="text-secondary fw-Bolder">Professor of Cardiology Clinical and Interventional Cardiologist.</Card.Text>
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
                                <h6 className="fw-bold text-primary">Professor Dr. Rafiq Ahmed</h6>
                                <Card.Text className="text-secondary fw-Bolder">Senior Fellowship in Cardiology (Singapore) Senior Consultan</Card.Text>
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
                                <h6 className="fw-bold text-primary">Dr. Mahbubor Rahman</h6>
                                <Card.Text className="text-secondary fw-Bolder">Senior Consultant Cardiologist & Medicine Specialist In-Charge.</Card.Text>
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
                                <h6 className="fw-bold text-primary">Dr. Arun Kumar Sharma</h6>
                                <Card.Text className="text-secondary fw-Bolder">Clinical & Interventional Cardiologist Senior Consultant & Incharge (CCU-2).</Card.Text>
                                <small className="text-dark">Health Plus</small>
                            </Card.Body>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    )
};

export default Interventional;