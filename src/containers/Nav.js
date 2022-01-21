import React from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import PG from "../img/Pg.jpg";
import "./Containters.css";

export default function Navi() {
	return (
		<div className="containter">
			<Navbar.Brand href="/" className="logo">
						<img
							src={PG}
							width="130px"
							className="d-inline-block align-top"
							alt="React Bootstrap logo"
						/>
					</Navbar.Brand>
			<div className="nav"></div>
			<Navbar bg="light" variant="light">
				<Container>
					
					<Nav className="me-auto">
						<Nav.Link href="/">Home</Nav.Link>
						<Nav.Link href="/shop">Sklep</Nav.Link>
						<Nav.Link href="/contact">Kontakt</Nav.Link>
						<NavDropdown title="Więcej" id="basic-nav-dropdown">
							<NavDropdown.Item href="/pricing">Wycena</NavDropdown.Item>
							<NavDropdown.Item href="#action/3.2">
								Realizacje
							</NavDropdown.Item>
							<NavDropdown.Item href="#action/3.3">Kariera</NavDropdown.Item>
							<NavDropdown.Divider />
							<NavDropdown.Item href="#action/3.4">
								Separated link
							</NavDropdown.Item>
						</NavDropdown>
					</Nav>
				</Container>
			</Navbar>
		</div>
	);
}
