import React from 'react';
import { Col, Form, Row, Button } from 'react-bootstrap';
import { Link,
        useLocation,
        useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Register = () => {
    const {error ,signInWithGoogle, signUpWithEmailPass, handleEmail, handlePassword, handleName,setError , password , setUserName , setUser , setErrorCode} = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_url = location.state?.from || '/home';
    const handleGoogleLogin = () =>
    {
        signInWithGoogle()
        .then((result) => {
           history.push(redirect_url)
        }).catch((error) => {
            setError(error.message);
        });
    };
    const handleRegistration = (e) => {
        e.preventDefault();
        if (!password)
        {
          setError('Please Input Valid Password.')
          return;
        }
        if (password.length < 6) {
          setError('Your Password Must be at Least 6 Characters long.')
          return;
        }
        if (!/(?=.*[A-Z].*[A-Z])/.test(password)) {
          setError('Your Password Should Contain at Least 2 Uppercase');
          return;
        }
          signUpWithEmailPass()
          .then(result => {
            setUser(result.user);
            setError('');
            setUserName();
            history.push(redirect_url)
          })
          .catch(error => {
            setError(error.message);
            setErrorCode(error.code);
          })      
    };
    return (
        <div className="container shadow-lg rounded p-5 mt-5 bg-white">
        <p>{error}</p>
            <Row xs={1} md={2} className="g-4">
            <Col>
            <img className="w-100 img-fluid" src="https://i.ibb.co/qkWBMDW/signup.png" alt="" />
            </Col>
            <Col className="border rounded p-3 shadow main-section">
            <Form>
                <h2 className="mt-3 my-3 fw-bolder text-primary text-center">Sign Up</h2>
                <Form.Group className="mb-3">
                    <Form.Label>Name</Form.Label>
                    <Form.Control  onBlur={handleName} type="text" placeholder="Enter Name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control onBlur={handleEmail} type="email" placeholder="Enter email" />
                </Form.Group>
                <Form.Group className="mb-4" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control onBlur={handlePassword} type="password" placeholder="Password" />
                </Form.Group>
                <Button variant="primary" type="submit" onClick={handleRegistration} className="w-100 fw-bolder mb-4">
                    Register
                </Button>
                <p>Already have an account?<Link to="/login" className="text-decoration-none text-primary"> Login</Link></p>
            </Form>
            <p className="text-center text-secondary my-3 border p-2">or use these options</p>
            <img onClick={handleGoogleLogin} className="border bg-white w-50 rounded d-block my-0 mx-auto shadow" src="https://i.ibb.co/WnSLk0V/google-signin-button.png" alt="" />
            </Col>
            </Row>
        </div>
    );
};

export default Register;