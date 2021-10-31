import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        /* 
        ----------------
        Footer Component
        ---------------- 
        */
        <div className="bg-dark py-3 mt-5">
            <div className="container mt-5">
            <Row xs={1} sm={1} md={2} lg={4} className="g-3">
                <Col className="col-3">
                    <p className="text-light">Important Links</p>
                    <p>
                    <Link to="/services" className="text-decoration-none text-opacity-50 text-light">Services</Link></p>
                    <p><Link to="/about" className="text-decoration-none text-opacity-50 text-light">About Us</Link></p>
                    <Link to="/contact" className="text-decoration-none text-opacity-50 text-light">Contact</Link>
                </Col>
                <Col className="col-3">
                    <p><Link className="text-decoration-none text-opacity-50 text-light" to="">Terms of use</Link></p>
                    <p><Link className="text-decoration-none text-opacity-50 text-light" to="">Accessibility</Link></p>
                    <p><Link className="text-decoration-none text-opacity-50 text-light" to="">Privacy and cookies</Link></p>
                    <p><Link className="text-decoration-none text-opacity-50 text-light" to="">Newsletter</Link></p>
                </Col>
                <Col className="col-3">
                    <p className="text-light">Follow us</p>
                    <p><Link className="text-decoration-none text-opacity-50 text-light" to=""><i className="fab fa-facebook-square"></i> Facebook</Link></p>
                    <p><Link className="text-decoration-none text-opacity-50 text-light" to=""><i className="fab fa-twitter-square"></i> Twitter</Link></p>
                </Col>
                <Col className="col-3">
                    <p className="text-light"><i className="fas fa-phone"></i> Phone</p>
                    <p className="text-opacity-50 text-light">+88 123-456-7890</p>
                    <p className="text-light"><i className="fas fa-map-marker-alt"></i> Address</p>
                    <p className="text-opacity-50 text-light">123 Anywhere,
                    <br />
                    Any City,
                    <br />
                    ST-12345
                    </p>
                </Col>
            </Row>
            </div>
            <h6 className="text-primary mt-5 text-center">© 2021 | Health Plus</h6>
        </div>
    );
};

export default Footer;