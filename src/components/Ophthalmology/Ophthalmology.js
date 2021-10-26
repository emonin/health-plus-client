import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';

const Ophthalmology = () => {
    return (
        <div className="container">
            <h1 className="text-primary fw-bold my-5">Ophthalmology</h1>
            <div className="bg-white shadow-lg rounded p-5">
                <div className="border shadow rounded p-4">
                    <p className="text-secondary">
                        The Eye department of Health Plus Hospital Dhaka has comprehensive treatment including basic and advanced treatment for patients. Our highly trained doctors offer specialized treatment for a range of eye problems.Our main branch of specialty is in providing vitreo retina services and Cataract and Phaco Surgery. Our trained consultants help in conducting surgeries as well in the prescription of glasses for both adult and children. The hospital contains high profile operation theaters and many of the surgeries do not require hospital admission.
                    </p>
                </div>
                <h4 className="fw-bold my-5">Doctors of Ophthalmology<hr /></h4>

                <Row xs={1} md={4} className="g-4">
                    <Col>
                        <div className="shadow rounded h-100 text-center item">
                            <Card.Img variant="top" className="border p-3 img-fluid w-75 mt-4" src="https://i.ibb.co/0YGcWqF/doctor6.png" />
                            <div className="overlay fade-overlay">
                                <div className="middle-icon"><i className="fas fa-plus"></i><p className="fw-bolder fs-6">Make An Appointment</p></div>
                            </div>
                            <Card.Body>
                                <h6 className="fw-bold text-primary">Dr. Ansarul Huq</h6>
                                <Card.Text className="text-secondary fw-Bolder">
                                    Chief Consultant.</Card.Text>
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
                                <h6 className="fw-bold text-primary">Prof. (Dr.) G. M. Mostafa</h6>
                                <Card.Text className="text-secondary fw-Bolder">
                                    Cataract & Eye Specialist,Director & Professo.</Card.Text>
                                <small className="text-dark">Health Plus</small>
                            </Card.Body>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    );
};

export default Ophthalmology;