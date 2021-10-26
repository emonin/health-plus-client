import React from 'react';
import { Col, Row } from 'react-bootstrap';

const Vaccination = () => {
    return (
        <div className="container">
            <h1 className="text-primary fw-bold my-5">Vaccination Center</h1>
            <div className="bg-white shadow-lg rounded p-5">
                <div className="border shadow rounded p-4">
                    <p className="text-secondary">
                    Vaccines are very important for both adult and child. Vaccines provide immunity against various dangerous diseases like tetanus, diphtheria, pertussis (whooping cough), polio, measles, hepatitis B, haemophilus influenza type b (which causes some meningitis and pneumonia), yellow fever, tuberculosis, etc. Health Plus vaccination offers a range of vaccinations not only for children, but for adults alike.
                    </p>
                </div>
                <h4 className="fw-bold my-5">The following vaccines are offered:<hr /></h4>

                <Row xs={1} md={2} className="g-4">
                    <Col>
                        <p className="text-success"><i className="fas fa-angle-right"></i> Typhoid (Typherix / Typhim Vi)</p>
                        <p className="text-success"><i className="fas fa-angle-right"></i> Chicken Pox (Varilrix)</p>
                        <p className="text-success"><i className="fas fa-angle-right"></i> Hepatitis B (Engerix B)</p>
                        <p className="text-success"><i className="fas fa-angle-right"></i> Hepatitis A (Havrix / Avaxim)</p>
                        <p className="text-success"><i className="fas fa-angle-right"></i> Pneumonia (Hiberix / Act Hib)</p>
                        <p className="text-success"><i className="fas fa-angle-right"></i> Pneumococcal Vaccine (Pneumo 23)</p>
                        <p className="text-success"><i className="fas fa-angle-right"></i> HPV Vaccine (Cervarix)</p>
                        <p className="text-success"><i className="fas fa-angle-right"></i> Meningococcal ACWY (Mencevax ACWY) </p>
                    </Col>
                    <Col>
                    <p className="text-success"><i className="fas fa-angle-right"></i> MMR (priorix)</p>
                        <p className="text-success"><i className="fas fa-angle-right"></i> DPT + Hep B (Tritanrix)</p>
                        <p className="text-success"><i className="fas fa-angle-right"></i> Rotaviral Diarrhoea (Rotarix)</p>
                        <p className="text-success"><i className="fas fa-angle-right"></i> Tetanus (Tetavax)</p>
                        <p className="text-success"><i className="fas fa-angle-right"></i> Neonatal Vaccination (Infanrix Hexa)</p>
                        <p className="text-success"><i className="fas fa-angle-right"></i> Fluarix (Agrippal)</p>
                        <p className="text-success"><i className="fas fa-angle-right"></i> COVID vaccine has arrived and it will start soon</p>
                    </Col>
                </Row>
                <p className="text-danger">All vaccines are subject to dose and age and given accordingly.</p>
            </div>
        </div>
    );
};

export default Vaccination;