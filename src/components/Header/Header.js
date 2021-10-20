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
            <Navbar className="header-bg py-4">
                <Container className="d-flex justify-content-between">
                <div>
                <Navbar.Brand className="fw-bolder fs-5"><Link to="/" className="text-decoration-none text-light"><span style={{color : "#30198D"}}><i class="fas fa-plus-square"></i> Health</span> <span className="text-opacity-75 text-light">Plus</span> </Link></Navbar.Brand>
                </div>
                <div>
                <Nav className="me-auto fw-bold">
                <Nav.Link><Link to="/home" className="text-decoration-none text-opacity-75 text-light">Home</Link></Nav.Link>
                <Nav.Link><Link to="/services" className="text-decoration-none text-opacity-75 text-light">Services</Link></Nav.Link>
                <Nav.Link><Link to="/doctors" className="text-decoration-none text-opacity-75 text-light">Doctors</Link></Nav.Link>
                <Nav.Link><Link to="/about" className="text-decoration-none text-opacity-75 text-light">About Us</Link></Nav.Link>
                <Nav.Link><Link to="/contact" className="text-decoration-none text-opacity-75 text-light">Contact</Link></Nav.Link>
                {   
                    !user.email 
                    ? <div><Link to="/login"><Button className="mx-3 fw-bold" variant="primary">Login</Button></Link>
                    <Link to="/register"><Button className="fw-bold" variant="outline-info text-light">Register</Button></Link></div>
                    : <span className="text-info"><i class="far fa-user"></i> {user.displayName} <Button onClick={logOut} className="fw-bold" variant="outline-danger text-light">Logout</Button></span>
                    
                }
                </Nav>
                </div>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;