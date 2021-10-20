import React from 'react';
import { Form, Button, Col, Row } from 'react-bootstrap';
import { 
        Link,
        useLocation,
        useHistory 
    } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Login = () => {
    const { signInWithGoogle , signInWithEmailPass , setError , error , handleEmail, handlePassword, password , errorCode , setUser } = useAuth();
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
    const handleLogin = (e) => {
        e.preventDefault();
        if (!password)
        {
          setError('Please Input Valid Password.')
          return;
        }
        if (errorCode === 'auth/wrong-password')
        {
          setError('Wrong password.')
          return;
        }
        signInWithEmailPass()
          .then(result => {
            setUser(result.user);
            setError('');
            history.push(redirect_url)
          })
          .catch(error => {
            console.log(error.message)
            setError(error.message);
          })      
    };
    return (
        <div className="container shadow-lg rounded p-5 mt-5 bg-white">
            <p className="text-danger">{error}</p>
            <Row xs={1} md={2} className="g-4">
            <Col className="border rounded p-3 shadow main-section">
            <Form> 
                <h2 className="my-3 fw-bolder text-primary text-center">Welcome Back</h2>
                <p className="mb-3 fw-bolder text-black text-center">Login to Continue</p>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control onBlur={handleEmail} type="email" placeholder="Enter email" />
                </Form.Group>
                <Form.Group className="mb-4" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control onBlur={handlePassword} type="password" placeholder="Password" />
                </Form.Group>
                <Button variant="primary" type="submit" onClick={handleLogin} className="w-100 fw-bolder mb-4">
                    Login
                </Button>
                <p>Don't have account?<Link to="/register" className="text-decoration-none text-primary"> Create a new account</Link></p>
            </Form>
            <p className="text-center text-secondary my-4 border p-2">or use these options</p>
            <img onClick={handleGoogleLogin} className="border bg-white w-50 rounded d-block my-0 mx-auto shadow" src="https://i.ibb.co/WnSLk0V/google-signin-button.png" alt="" />
            </Col>
            <Col>
            <img className="w-100 img-fluid" src="https://i.ibb.co/1LNYggZ/login.png" alt="" />
            </Col>
            </Row>
        </div>
    );
};

export default Login;