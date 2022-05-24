import Link from 'next/link'
import {Container, Nav, NavDropdown, Navbar} from "react-bootstrap";

export default function NavBar() {
    return (
        <Navbar dark={"true"} sticky={"top"} bg="dark" >
            <Container>
                {/*<Navbar.Brand className={"text-white"} href="#home">React-Bootstrap</Navbar.Brand>*/}
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#header">Home</Nav.Link>
                        <Nav.Link href="#about">About</Nav.Link>
                        <Nav.Link href="#projects">Projects</Nav.Link>
                        <Nav.Link href="#contact">contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

