import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';

const Doctors = () => {
    return (
        <div className="container">
            <h1 className="text-primary fw-bold my-5">Our Specialist</h1>
            <div className="bg-white shadow-lg rounded p-5">
            <Row xs={1} md={3} className="g-4">
            <Col>
            <div className="shadow rounded h-100">
                <Card.Img variant="top" className="border p-3 img-fluid w-50 ms-3 mt-3" src="https://i.ibb.co/kDGL56h/doctor.png" />
                <Card.Body>
                <Card.Title className="fw-bold text-primary">Professor Dr. Md. Ashraf Ali</Card.Title>
                <Card.Text className="text-secondary fw-Bolder">Professor, Specialist in Medicine & Neurology Senior Consultant</Card.Text>
                <Card.Text className="text-dark">Health Plus</Card.Text>
                </Card.Body>
            </div>
            </Col>
            <Col>
            <div className="shadow rounded h-100">
                <Card.Img variant="top" className="border p-3 img-fluid w-50 ms-3 mt-3" src="https://i.ibb.co/0YGcWqF/doctor6.png" />
                <Card.Body>
                <Card.Title className="fw-bold text-primary">Professor Dr. Shahrukh Ahmed</Card.Title>
                <Card.Text className="text-secondary fw-Bolder">Neurology & Medicine Specialist Senior Consultant</Card.Text>
                <Card.Text className="text-dark">Health Plus</Card.Text>
                </Card.Body>
            </div>
            </Col>
            <Col>
            <div className="shadow rounded h-100">
                <Card.Img variant="top" className="border p-3 img-fluid w-50 ms-3 mt-3" src="https://i.ibb.co/vwYJYjm/doctor2.png" />
                <Card.Body>
                <Card.Title className="fw-bold text-primary">Professor Dr. Swapan Chandra Dhar</Card.Title>
                <Card.Text className="text-secondary fw-Bolder">Specialist in Medicine, Gastro-intestinal & Liver Diseases Professor</Card.Text>
                <Card.Text className="text-dark">Health Plus</Card.Text>
                </Card.Body>
            </div>
            </Col>
            <Col>
            <div className="shadow rounded h-100">
                <Card.Img variant="top" className="border p-3 img-fluid w-50 ms-3 mt-3" src="https://i.ibb.co/GHGnDcx/doctor-3.png" />
                <Card.Body>
                <Card.Title className="fw-bold text-primary">Professor Dr. A K M Salek</Card.Title>
                <Card.Text className="text-secondary fw-Bolder">Pain Medicine & Rheumatology Specialist Professor</Card.Text>
                <Card.Text className="text-dark">Health Plus</Card.Text>
                </Card.Body>
            </div>
            </Col>
            <Col>
            <div className="shadow rounded h-100">
                <Card.Img variant="top" className="border p-3 img-fluid w-50 ms-3 mt-3" src="https://i.ibb.co/xsPLDfZ/doctor-1.png" />
                <Card.Body>
                <Card.Title className="fw-bold text-primary">Professor Dr. Sangjukta Saha</Card.Title>
                <Card.Text className="text-secondary fw-Bolder">Obs, Gynae Specialist & Laparoscopic Surgeon Professor & Head</Card.Text>
                <Card.Text className="text-dark">Health Plus</Card.Text>
                </Card.Body>
            </div>
            </Col>
            <Col>
            <div className="shadow rounded h-100">
                <Card.Img variant="top" className="border p-3 img-fluid w-50 ms-3 mt-3" src="https://i.ibb.co/HtkWjh8/doctor4.png" />
                <Card.Body>
                <Card.Title className="fw-bold text-primary">Professor Dr. A Z M Zahid Hossain</Card.Title>
                <Card.Text className="text-secondary fw-Bolder">Urology Specialist</Card.Text>
                <Card.Text className="text-dark">Health Plus</Card.Text>
                </Card.Body>
            </div>
            </Col>
            <Col>
            <div className="shadow rounded h-100">
                <Card.Img variant="top" className="border p-3 img-fluid w-50 ms-3 mt-3" src="https://i.ibb.co/BN1ZTxN/doctor7.png" />
                <Card.Body>
                <Card.Title className="fw-bold text-primary">Professor Dr. Abduz Zaher</Card.Title>
                <Card.Text className="text-secondary fw-Bolder">Professor of Cardiology Clinical and Interventional Cardiologist</Card.Text>
                <Card.Text className="text-dark">Health Plus</Card.Text>
                </Card.Body>
            </div>
            </Col>
            <Col>
            <div className="shadow rounded h-100">
                <Card.Img variant="top" className="border p-3 img-fluid w-50 ms-3 mt-3" src="https://i.ibb.co/wJyB67h/doctor8.png" />
                <Card.Body>
                <Card.Title className="fw-bold text-primary">Professor Dr. Salimur Rahman</Card.Title>
                <Card.Text className="text-secondary fw-Bolder">Liver & Medicine Specialist Professor of Hepatology (Former) UGC</Card.Text>
                <Card.Text className="text-dark">Health Plus</Card.Text>
                </Card.Body>
            </div>
            </Col>
            <Col>
            <div className="shadow rounded h-100">
                <Card.Img variant="top" className="border p-3 img-fluid w-50 ms-3 mt-3" src="https://i.ibb.co/st82c2h/doctor9.png" />
                <Card.Body>
                <Card.Title className="fw-bold text-primary">Dr. Most. Bilkis Fatema</Card.Title>
                <Card.Text className="text-secondary fw-Bolder">MBBS, MCPS (Surgery), FCPS (Surgery), MS (Colorectal Surgery)</Card.Text>
                <Card.Text className="text-dark">Health Plus</Card.Text>
                </Card.Body>
            </div>
            </Col>
            </Row>
        </div>
    </div>
    );
};

export default Doctors;







