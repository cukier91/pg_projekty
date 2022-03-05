import React, { useState } from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import PG from "../img/Pg.jpg";
import "./Containters.css";
import shoppingCart from "../img/shoppingCart.png";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Navi() {
	const [path, setPath] = useState(window.location.pathname);
	const products = useSelector((state) => state.allProducts.products);

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

					<Navbar.Collapse id="navbar-dark-example">
						<Nav>
							<NavDropdown
								id="nav-dropdown-dark-example"
								title="Więcej"
								menuVariant="dark"
							>
								<NavDropdown.Item href="/signup">Utwórz konto</NavDropdown.Item>
								<NavDropdown.Item href="#action/3.3">Kariera</NavDropdown.Item>
								<NavDropdown.Divider />
								<NavDropdown.Item href="/admin">
									Panel administratora
								</NavDropdown.Item>
							</NavDropdown>
						</Nav>
						<Link to="/basket" >
							<img
								src={shoppingCart}
								style={{ width: "10%", marginLeft: "100%" }}
								
							/>
						</Link>
						<div
							style={{
								display:products.length===0?"none":"",
								height: "25px",
								width: "25px",
								color: "black",
								fontWeight: "500",
								marginLeft: "5%",
								marginTop:'4%',
								background: "grey",
								borderRadius: "50%",
								textAlign: "center",
								color: "white",
								fontSize: "80%",
								fontFamily: "Montserrat",
								fontWeight: "700",
							}}
						>
							{products.length}
						</div>
					</Navbar.Collapse>
				</div>
			</Navbar>
		</div>
	);
}
