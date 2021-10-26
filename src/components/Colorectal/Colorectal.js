import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';

const Colorectal = () => {
    return (
        <div className="container">
            <h1 className="text-primary fw-bold my-5">Colorectal Surgery</h1>
            <div className="bg-white shadow-lg rounded p-5">
                <div className="border shadow rounded p-4">
                    <p className="text-secondary">
                        Colorectal surgery is a medical operation that is performed on the colon, rectum and anus. Colorectal surgeons, who are also referred to as proctologists, are responsible for carrying out this procedure, which may be necessary to treat a number of conditions.These problems can be acquired or congenital, and include, but are not limited to, Crohn’s disease, ulcerative colitis and neoplastic lesions in the colorectal region, as well as birth defects (such as imperforate anus), fissures, fistulas, hemorrhoids, rectal or anal prolapse, fecal incontinence, diverticulitis, diverticular disease and other disorders.Department of  Colorectal Surgery of Health Plus Hospitals Dhaka offers a wide range of comprehensive and high quality surgical procedures. The department is well equipped with the latest technology and facilities, and is manned by experienced surgeons, nurses and technicians.
                    </p>
                </div>
                <h4 className="fw-bold my-5">Doctors of Colorectal Surgery<hr /></h4>

                <Row xs={1} md={4} className="g-4">
                    <Col>
                        <div className="shadow rounded h-100 text-center item">
                            <Card.Img variant="top" className="border p-3 img-fluid w-75 mt-4" src="https://i.ibb.co/st82c2h/doctor9.png" />
                            <div className="overlay fade-overlay">
                                <div className="middle-icon"><i className="fas fa-plus"></i><p className="fw-bolder fs-6">Make An Appointment</p></div>
                            </div>
                            <Card.Body>
                                <h6 className="fw-bold text-primary">Dr. Most. Bilkis Fatema</h6>
                                <Card.Text className="text-secondary fw-Bolder">
                                    MBBS, MCPS (Surgery), FCPS (Surgery), MS (Colorectal Surgery).</Card.Text>
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
                                <h6 className="fw-bold text-primary">Professor Dr. Md. Shahadat Hossain Sheikh</h6>
                                <Card.Text className="text-secondary fw-Bolder">
                                    Advanced Laparoscopic Colorectal Surgeon.</Card.Text>
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
                                <h6 className="fw-bold text-primary">Dr. Md. Saifullah</h6>
                                <Card.Text className="text-secondary fw-Bolder">
                                    General, Laparoscopic, Colorectal & Cancer Specialist Surgeon Assistant.</Card.Text>
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
                                <h6 className="fw-bold text-primary">PROF. DR. SHAHADOT HOSSAIN SHEIKH</h6>
                                <Card.Text className="text-secondary fw-Bolder">
                                    Chairman, Department of Colorectal Surgery.</Card.Text>
                                <small className="text-dark">Health Plus</small>
                            </Card.Body>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    );
};

export default Colorectal;