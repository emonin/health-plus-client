import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';

const Gastroenterology = () => {
    return (
        <div className="container">
            <h1 className="text-primary fw-bold my-5">Gastroenterology</h1>
            <div className="bg-white shadow-lg rounded p-5">
                <div className="border shadow rounded p-4">
                    <p className="text-secondary">
                        Department of Gastroenterology and Hepatology is devoted to the clinical care of patients with gastrointestinal and liver disorders. The department is home to excellent patient care, and our specialists employ the most advanced diagnostic and therapeutic endoscopy services to ensure the best outcomes for each patient. Working closely with a dedicated staff that includes doctors, technologists, nurses, dietitians and more, our care is unsurpassed with the kind of quality and compassion you can expect from a leader in healthcare.The department work for the prevention, diagnosis and treatment of diseases of digestive tract.Symptoms of digestive diseases—gastrointestinal (GI) conditions—can be very uncomfortable, such as diarrhea, bloating, constipation, or other difficulties related to digesting food. So many people suffer from these symptoms that there are hundreds of over-the-counter medications sold in our country to deal with the discomfort.We have the specialists who will find the cause of your symptoms and treat you based on your specific condition and personal needs.
                    </p>
                </div>
                <h4 className="fw-bold my-5">Doctors of Gastroenterology<hr /></h4>

                <Row xs={1} md={4} className="g-4">
                    <Col>
                        <div className="shadow rounded h-100 text-center item">
                            <Card.Img variant="top" className="border p-3 img-fluid w-75 mt-4" src="https://i.ibb.co/kDGL56h/doctor.png" />
                            <div className="overlay fade-overlay">
                                <div className="middle-icon"><i className="fas fa-plus"></i><p className="fw-bolder fs-6">Make An Appointment</p></div>
                            </div>
                            <Card.Body>
                                <h6 className="fw-bold text-primary">Professor (Dr.) Mian Mashhud Ahmad</h6>
                                <Card.Text className="text-secondary fw-Bolder">Professor, Gastroenterology Department Specialist in Medicin.</Card.Text>
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
                                <h6 className="fw-bold text-primary">Professor Dr. Swapan Chandra Dhar</h6>
                                <Card.Text className="text-secondary fw-Bolder">
                                    Specialist in Medicine, Gastro-intestinal & Liver Diseases Professor.</Card.Text>
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
                                <h6 className="fw-bold text-primary">Professor Dr. Md. Ashraful Islam</h6>
                                <Card.Text className="text-secondary fw-Bolder">
                                    Specialist in Medicine, Gastro-intestinal & Liver Diseases Professor.</Card.Text>
                                <small className="text-dark">Health Plus</small>
                            </Card.Body>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    );
};

export default Gastroenterology;