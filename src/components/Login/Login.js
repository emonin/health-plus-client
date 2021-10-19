import React from 'react';
import { Form, Button, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className="container border rounded p-5 mt-5 bg-white">
            <Row xs={1} md={2} className="g-4">
            <Col>
            <img className="w-100 img-fluid" src="https://i.ibb.co/1LNYggZ/login.png" alt="" />
            </Col>
            <Col className="border rounded p-3 shadow main-section">
            <Form>
                <h2 className="my-3 fw-bolder text-primary text-center">Welcome Back</h2>
                <p className="mb-3 fw-bolder text-black text-center">Login to Continue</p>
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
                    Login
                </Button>
                <p>Don't have account?<Link to="/register" className="text-decoration-none text-primary"> Create a new account</Link></p>
            </Form>
            <p className="text-center text-secondary my-4 border p-2">or use these options</p>
            <img className="border bg-white w-50 rounded d-block my-0 mx-auto shadow" src="https://i.ibb.co/WnSLk0V/google-signin-button.png" alt="" />
            </Col>
            </Row>
        </div>
    );
};

export default Login;