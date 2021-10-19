import React from 'react';
import { Col, Form, Row, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className="container border rounded p-5 mt-5 bg-white">
            <Row xs={1} md={2} className="g-4">
            <Col>
            <img className="w-100 img-fluid" src="https://i.ibb.co/qkWBMDW/signup.png" alt="" />
            </Col>
            <Col className="border rounded p-3 shadow main-section">
            <Form>
                <h2 className="mt-3 my-3 fw-bolder text-primary text-center">Sign Up</h2>
                <Form.Group className="mb-3">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter Name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit" className="w-100 fw-bolder mb-3">
                    Register
                </Button>
                <p>Already have an account?<Link to="/login" className="text-decoration-none text-primary"> Login</Link></p>
            </Form>
            <p className="text-center text-secondary my-3 border p-2">or use these options</p>
            <img className="border bg-white w-50 rounded d-block my-0 mx-auto shadow" src="https://i.ibb.co/WnSLk0V/google-signin-button.png" alt="" />
            </Col>
            </Row>
        </div>
    );
};

export default Register;