import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';

const Hematology = () => {
    return (
        <div className="container">
            <h1 className="text-primary fw-bold my-5">Hematology</h1>
            <div className="bg-white shadow-lg rounded p-5">
                <div className="border shadow rounded p-4">
                    <p className="text-secondary">
                        Hematology is the medical specialty that focuses on the treatment of blood disorders and malignancies. Leukemia, lymphoma, and sickle-cell anemia are just a few of the conditions that are treated by hematologists. Hematologist-oncologists are physicians who practice in the field of hematology. Hematologists are also trained in the field of medical oncology (solid tumors), and they may specialize in one or the other, or practice a mix of hematology and oncology.Department of Hematology at Health Plus Hospital Dhaka provides modern treatment and management for many patients with a wide spectrum of benign and malignant blood-related disorders. Consultative services are provided where our Consultant gives medical advice and knowledge about managing a hematological patient.  Regular high blood transfusions for hematological patients are performed at the hospital. Health Plus Blood Bank stores whole blood, fresh frozen plasma and platelets for ready transfusion and is in service 24 hours a day. The Blood Bank uses cutting-edge technology and has the most secure blood transfusion policy, maintaining quality in every stride.
                    </p>
                </div>
                <h4 className="fw-bold my-5">Doctors of Hematology<hr /></h4>

                <Row xs={1} md={4} className="g-4">
                    <Col>
                        <div className="shadow rounded h-100 text-center item">
                            <Card.Img variant="top" className="border p-3 img-fluid w-75 mt-4" src="https://i.ibb.co/xsPLDfZ/doctor-1.png" />
                            <div className="overlay fade-overlay">
                                <div className="middle-icon"><i className="fas fa-plus"></i><p className="fw-bolder fs-6">Make An Appointment</p></div>
                            </div>
                            <Card.Body>
                                <h6 className="fw-bold text-primary">Dr. Tanzia Khanum Tompa</h6>
                                <Card.Text className="text-secondary fw-Bolder">
                                    Hematologist Junior Consultant.</Card.Text>
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
                                <h6 className="fw-bold text-primary">Professor Dr. M A Khan</h6>
                                <Card.Text className="text-secondary fw-Bolder">
                                    Haematologist & BMT Physician Head of Haematology & BMT Unit.</Card.Text>
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
                                <h6 className="fw-bold text-primary">Professor Dr. Md. Sirajul Islam</h6>
                                <Card.Text className="text-secondary fw-Bolder">
                                    Blood & Medicine Specialist Professor & Head.</Card.Text>
                                <small className="text-dark">Health Plus</small>
                            </Card.Body>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    );
};

export default Hematology;