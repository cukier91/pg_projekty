import React, { useState } from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import PG from "../img/Pg.jpg";
import "./Containters.css";
import shoppingCart from "../img/shoppingCart.png";
import { useParams } from "react-router-dom";

export default function Navi() {
	const [path, setPath] = useState(window.location.pathname);
	console.log(path);
	return (
		<div className="containter">
			<Navbar.Brand href="/" className="logo">
				<img
					src={PG}
					width="130px"
					className="d-inline-block align-top"
					alt="PG Projekty Logo"
				/>
			</Navbar.Brand>
			<div className="nav"></div>
			<Navbar style={{ borderTop: "solid 1px black" }}>
				<div style={{ margin: "auto", display: "flex" }}>
					<Nav.Link href="/" className={path === "/" ? "path" : "no-path"}>
						Home
					</Nav.Link>
					<Nav.Link
						href="/shop"
						className={path === "/shop" ? "path" : "no-path"}
					>
						Sklep
					</Nav.Link>
					<Nav.Link
						href="/contact"
						className={path === "/contact" ? "path" : "no-path"}
					>
						Kontakt
					</Nav.Link>
					<Nav.Link
						href="/pricing"
						className={path === "/pricing" ? "path" : "no-path"}
					>
						Wycena
					</Nav.Link>
					<Navbar.Collapse id="navbar-dark-example">
						<Nav>
							<NavDropdown
								id="nav-dropdown-dark-example"
								title="Więcej"
								menuVariant="dark"
							>
								<NavDropdown.Item href="/signup">
									Utwórz konto
								</NavDropdown.Item>
								<NavDropdown.Item href="#action/3.3">Kariera</NavDropdown.Item>
								<NavDropdown.Divider />
								<NavDropdown.Item href="/admin">
									Panel administratora
								</NavDropdown.Item>
							</NavDropdown>
						</Nav>
						<img src={shoppingCart} style={{ width: "8%", marginLeft:'100%'}} />
						<div style={{height:'1px', color:'black', fontWeight:'500'}}>4</div>
					</Navbar.Collapse>
				</div>
				
			</Navbar>
		</div>
	);
}
