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
            <Row xs={1} md={4} className="g-3">
                <Col className="col-3">
                    <p>
                    <Link to="/services" className="text-decoration-none text-opacity-50 text-light">Services</Link></p>
                    <p><Link to="/courses" className="text-decoration-none text-opacity-50 text-light">Courses</Link></p>
                    <p><Link to="/exam" className="text-decoration-none text-opacity-50 text-light">Exams</Link></p>
                    <p><Link to="/library" className="text-decoration-none text-opacity-50 text-light">Library</Link></p>
                    <p><Link to="/culture" className="text-decoration-none text-opacity-50 text-light">Culture</Link></p>
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
                    <p><Link className="text-decoration-none text-opacity-50 text-light" to=""><i class="fab fa-facebook-square"></i> Facebook</Link></p>
                    <p><Link className="text-decoration-none text-opacity-50 text-light" to=""><i class="fab fa-twitter-square"></i> Twitter</Link></p>
                </Col>
                <Col className="col-3">
                    <p className="text-light">Download the Official App</p>
                    <p><Link className="text-decoration-none text-opacity-50 text-light" to=""><i class="fab fa-google-play"></i> Google Play</Link></p>
                    <p><Link className="text-decoration-none text-opacity-50 text-light" to=""><i class="fab fa-app-store-ios"></i> App Store</Link></p>
                </Col>
            </Row>
            </div>
            <h6 className="text-primary mt-5 text-center">© 2021 | Health Plus</h6>
        </div>
    );
};

export default Footer;