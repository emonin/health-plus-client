import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';

const Hepatobiliary = () => {
    return (
        <div className="container">
            <h1 className="text-primary fw-bold my-5">Hepatobiliary Surgery</h1>
            <div className="bg-white shadow-lg rounded p-5">
                <div className="border shadow rounded p-4">
                    <p className="text-secondary">
                        Health Plus Department of Hepatobiliary Surgery consists of experienced surgeons and anesthetic team who are ready to give outstanding service in Bangladesh. The mission of the department of Hepatobiliary Surgery is to provide best possible service to patients with special emphasis on ethics and quality. We have state of the art surgical instruments ensuring patient’s safety in surgical procedures and providing the best possible service round the clock through our in-house Qualified Specialist Surgeons.
                    </p>
                </div>
                <h4 className="fw-bold my-5">Doctors of Hepatobiliary Surgery<hr /></h4>

                <Row xs={1} md={4} className="g-4">
                    <Col>
                        <div className="shadow rounded h-100 text-center item">
                            <Card.Img variant="top" className="border p-3 img-fluid w-75 mt-4" src="https://i.ibb.co/kDGL56h/doctor.png" />
                            <div className="overlay fade-overlay">
                                <div className="middle-icon"><i className="fas fa-plus"></i><p className="fw-bolder fs-6">Make An Appointment</p></div>
                            </div>
                            <Card.Body>
                                <h6 className="fw-bold text-primary">Professor Dr. Md. Zulfiqur Rahman Khan</h6>
                                <Card.Text className="text-secondary fw-Bolder">
                                    Chairman, Hepatobiliary Pancreatic & Liver Transplant Surgery.</Card.Text>
                                <small className="text-dark">Health Plus</small>
                            </Card.Body>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    );
};

export default Hepatobiliary;