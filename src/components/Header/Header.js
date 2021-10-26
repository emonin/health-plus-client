import React from 'react';
import { Container, Navbar, Nav , Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Header.css';

const Header = () => {
    const {user , logOut} = useAuth();
    return (
        /* 
        ---------------------------
        Header Component and Navbar
        --------------------------- 
        */
        <div>
            <Navbar className="header-bg py-4" expand="lg">
                <Container className="d-flex justify-content-between">
                <div>
                <Navbar.Brand className="fw-bolder fs-5"><Link to="/" className="text-decoration-none text-light"><span style={{color : "#30198D"}}><i className="fas fa-plus-square"></i> Health</span> <span className="text-opacity-75 text-light">Plus</span> </Link></Navbar.Brand>
                </div>
                <div>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto fw-bold">
                <Nav.Link><Link to="/home" className="hover-line text-decoration-none text-opacity-75 text-light me-3">Home</Link></Nav.Link>
                <Nav.Link><Link to="/services" className="hover-line text-decoration-none text-opacity-75 text-light me-3">Services</Link></Nav.Link>
                <Nav.Link><Link to="/doctors" className="hover-line text-decoration-none text-opacity-75 text-light me-3">Doctors</Link></Nav.Link>
                <Nav.Link><Link to="/about" className="hover-line text-decoration-none text-opacity-75 text-light me-3">About Us</Link></Nav.Link>
                <Nav.Link><Link to="/contact" className="hover-line text-decoration-none text-opacity-75 text-light me-3">Contact</Link></Nav.Link>
                {   
                    !user.email 
                    ? <div><Link to="/login"><Button className="mx-3 fw-bold" variant="primary">Login</Button></Link>
                    <Link to="/register"><Button className="fw-bold" variant="outline-info text-light">Register</Button></Link></div>
                    : <span className="text-info"><span className="me-3"><i className="far fa-user"></i> {user.displayName} </span><Button onClick={logOut} className="fw-bold" variant="outline-danger text-light">Logout</Button></span>
                    
                }
                </Nav>
                </Navbar.Collapse>
                </div>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;