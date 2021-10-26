import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';

const Oncology = () => {
    return (
        <div className="container">
            <h1 className="text-primary fw-bold my-5">Oncology</h1>
            <div className="bg-white shadow-lg rounded p-5">
                <div className="border shadow rounded p-4">
                    <p className="text-secondary">
                        Oncology is the field of medical that deals with cancer treatment, from chemotherapy to surgery.Health Plus oncology center was established with the vision of providing the best possible care to patients suffering from all type of cancers. The experts at the Health Plus hospital oncology Centre adopt a multidisciplinary approach, always working closely with other departments of the hospital to identify and find a solution to patient issues.Our department offers comprehensive anti-cancer therapies, comprehensive services like home visit to late-stage cancer patients to help them improve their quality of life. We have improved our service over years to meet patient needs. Suitable patients can opt for latest treatment options like targeted therapies and immunotherapies.Health Plus offers breast cancer services from diagnosis to treatment. Our advanced diagnostics include 3-D mammography and minimally invasive diagnostic procedures. Our compassionate team of breast specialists, oncologists, nurses, and support staff is here to help you through your entire patient journey.Health Plus provides outpatient treatment services to our patients with solid tumor cancers such as lung cancer and prostate cancer, as well as blood cancers, including leukemia, lymphoma, and multiple myeloma. Our medical oncologists, nurses, and support staff work together to deliver quality care to you or your loved ones.Many factors can contribute to cancer, and it can affect many different organs. While a diagnosis of cancer sounds frightening, modern advancements in cancer screening enable earlier detection of cancer, when treatment is more likely to be successful.Significant improvements in cancer treatment also offer more positive outcomes and survival rates for many patients.If you have a family history of cancer or think you may be at risk for cancer, find out more about early screening or speak to a doctor about your concerns.
                    </p>
                </div>
                <h4 className="fw-bold my-5">Doctors of Oncology<hr /></h4>

                <Row xs={1} md={4} className="g-4">
                    <Col>
                        <div className="shadow rounded h-100 text-center item">
                            <Card.Img variant="top" className="border p-3 img-fluid w-75 mt-4" src="https://i.ibb.co/kDGL56h/doctor.png" />
                            <div className="overlay fade-overlay">
                                <div className="middle-icon"><i className="fas fa-plus"></i><p className="fw-bolder fs-6">Make An Appointment</p></div>
                            </div>
                            <Card.Body>
                                <h6 className="fw-bold text-primary">Dr. A.F.M. Kamal Uddin</h6>
                                <Card.Text className="text-secondary fw-Bolder">
                                    Oncologist.</Card.Text>
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
                                <h6 className="fw-bold text-primary">Prof. Dr. Shahana Pervin</h6>
                                <Card.Text className="text-secondary fw-Bolder">
                                    Professor.</Card.Text>
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
                                <h6 className="fw-bold text-primary">Professor Dr. Moarraf Hossen</h6>
                                <Card.Text className="text-secondary fw-Bolder">
                                    Ex. Director Cum Professor.</Card.Text>
                                <small className="text-dark">Health Plus</small>
                            </Card.Body>
                        </div>
                    </Col>
                    <Col>
                        <div className="shadow rounded h-100 text-center item">
                            <Card.Img variant="top" className="border p-3 img-fluid w-75 mt-4" src="https://i.ibb.co/xsPLDfZ/doctor-1.png" />
                            <div className="overlay fade-overlay">
                                <div className="middle-icon"><i className="fas fa-plus"></i><p className="fw-bolder fs-6">Make An Appointment</p></div>
                            </div>
                            <Card.Body>
                                <h6 className="fw-bold text-primary">Dr. Shamsun Nahar</h6>
                                <Card.Text className="text-secondary fw-Bolder">
                                    Breast Tumor & Cancer Specialist Assistant Professor.</Card.Text>
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
                            <Card.Img variant="top" className="border p-3 img-fluid w-75 mt-4" src="https://i.ibb.co/st82c2h/doctor9.png" />
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

export default Oncology;