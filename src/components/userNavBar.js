import React from "react";
import { Container, Nav, Navbar } from 'react-bootstrap'
import { useAuth } from '../contexts/AuthContext'

export default function UserNavBar() {
    const { logout } = useAuth();
    
    return (
        <Navbar bg="dark" variant="dark" style={{fontSize:"35px"}}>
            <Container>
            <Navbar.Brand href="/" style={{fontSize:"39px"}}>Myers Briggs</Navbar.Brand>
            <Nav className="me-auto">           
                <Nav.Link href="/results">Results</Nav.Link>
                <Nav.Link onClick={logout} href="/">Logout</Nav.Link>
            </Nav>
            </Container>
        </Navbar>
    )
}
