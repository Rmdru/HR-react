import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from "react-router-dom";

export function Header() {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="/">
                <img src="/logo-dyflexis-2.svg" className="w-50" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                    <NavLink className="nav-link" to="/" activeclassname="active">Home</NavLink>
                    <NavLink className="nav-link" to="/vragenlijsten" activeclassname="active">Vragenlijsten</NavLink>
                    <NavLink className="nav-link" to="/leden" activeclassname="active">Leden</NavLink>
                    <NavLink className="nav-link" to="/teams" activeclassname="active">Teams</NavLink>
                    <NavLink className="nav-link" to="/rapportage" activeclassname="active">Rapportage</NavLink>
                    </Nav>
                </Navbar.Collapse>
                <div className="account">
                    <div className="user">
                        <span className="material-icons">person</span>
                        <span className="loggedInUser"></span>
                    </div>
                    <Nav.Link href="/uitloggen">Uitloggen</Nav.Link>
                </div>
            </Container>
        </Navbar>
    );
}