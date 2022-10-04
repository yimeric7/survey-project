import React from "react";
import { Container, Nav, Navbar } from 'react-bootstrap'

export default function UserNavBar() {
    // logout + see results
    return (
        <Navbar bg="dark" variant="dark" style={{fontSize:"35px"}}>
            <Container>
            <Navbar.Brand href="/" style={{fontSize:"39px"}}>Myers Briggs</Navbar.Brand>
            <Nav className="me-auto">           
                <Nav.Link href="/signup">Sign Up</Nav.Link>
                <Nav.Link href="/login">Login</Nav.Link>
            </Nav>
            </Container>
        </Navbar>
    )
}
