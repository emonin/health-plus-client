import React from 'react';
import { Button, Form } from 'react-bootstrap';

const Contact = () => {
    return (
        <div className="container">
            <p className="text-secondary mt-5">WHAT WE DO</p>
            <h1 className="text-primary fw-bold my-2">Get In Touch</h1>
            <p>We offer extensive medical procedures to outbound and inbound patients what it is and we are very proud of achievpatients for recovery</p><div className="shadow-lg rounded p-5 bg-white">
            <Form>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Email address*</Form.Label>
                    <Form.Control type="email" placeholder="name@example.com" />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>First Name*</Form.Label>
                    <Form.Control type="text" />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Last Name*</Form.Label>
                    <Form.Control type="text" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Telephone*</Form.Label>
                    <Form.Control/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Message*</Form.Label>
                    <Form.Control as="textarea" rows={3} />
                </Form.Group>
            </Form>
            <h6 className="text-danger my-3">* required</h6>
            <Button className="px-5" variant="outline-primary">Send</Button>
            </div>
        </div>
    );
};

export default Contact;