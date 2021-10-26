import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';

const Hepatology = () => {
    return (
        <div className="container">
            <h1 className="text-primary fw-bold my-5">Hepatology</h1>
            <div className="bg-white shadow-lg rounded p-5">
                <div className="border shadow rounded p-4">
                    <p className="text-secondary">
                        Our liver specialists or hepatologists have been at the forefront of groundbreaking advances in the detection and treatment of liver diseases for more than half a century. We have a tradition of excellence and consistently provide compassionate, innovative care.Health Plus provides personalized care, whatever type of acute or chronic liver disease you may have, including hepatitis B and hepatitis C, liver cancer, or cirrhosis. Our liver disease specialists evaluate the health and function of your liver, ensuring an expert diagnosis and a comprehensive treatment plan that can help stop and even reverse your liver disease.Department of  Hepatology is devoted to the clinical care of patients with liver disorders. The department is home to excellent patient care, and our specialists employ the most advanced diagnostic and therapeutic services to ensure the best outcomes for each patient. Working closely with a dedicated staff that includes doctors, technologists, nurses, dietitians and more, our care is unsurpassed with the kind of quality and compassion you can expect from a leader in healthcare.
                    </p>
                </div>
                <h4 className="fw-bold my-5">Doctors of Hepatology<hr /></h4>

                <Row xs={1} md={4} className="g-4">
                    <Col>
                        <div className="shadow rounded h-100 text-center item">
                            <Card.Img variant="top" className="border p-3 img-fluid w-75 mt-4" src="https://i.ibb.co/kDGL56h/doctor.png" />
                            <div className="overlay fade-overlay">
                                <div className="middle-icon"><i className="fas fa-plus"></i><p className="fw-bolder fs-6">Make An Appointment</p></div>
                            </div>
                            <Card.Body>
                                <h6 className="fw-bold text-primary">Professor Dr. Salimur Rahman</h6>
                                <Card.Text className="text-secondary fw-Bolder">Liver & Medicine Specialist Professor of Hepatology (Former) UGC.</Card.Text>
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
                                <h6 className="fw-bold text-primary">Professor Dr. Nooruddin Ahmad</h6>
                                <Card.Text className="text-secondary fw-Bolder">Consultant Physician and Hepatologist Professor, Department.</Card.Text>
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
                                <h6 className="fw-bold text-primary">Professor. Dr. Mamun-Al-Mahtab (Shwapnil)</h6>
                                <Card.Text className="text-secondary fw-Bolder">Liver & Liver Cancer & Gastroenterology Specialist.</Card.Text>
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
                                <h6 className="fw-bold text-primary">Dr. Faroque Ahmed</h6>
                                <Card.Text className="text-secondary fw-Bolder">
                                    Liver & Gastrointestinal Specialist Associate Prof. & Head.</Card.Text>
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
                                <h6 className="fw-bold text-primary">Dr. K M Anamul</h6>
                                <Card.Text className="text-secondary fw-Bolder">
                                    Gold Medalist Consultation for Medicine Gastro-Liver Diseases.</Card.Text>
                                <small className="text-dark">Health Plus</small>
                            </Card.Body>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    );
};

export default Hepatology;