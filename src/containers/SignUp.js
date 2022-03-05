import React, { useRef } from "react";
import { Card, Button, Form, Container } from "react-bootstrap";

export default function SignUp() {
	const emailRef = useRef();
	const passRef = useRef();
	const rePassRef = useRef();

	return (
		<Container>
			<div
				className="d-flex align-items-center justify-content-center"
				style={{ minHeight: "75vh" }}
			>
				<Card>
					<h2 className="text-center mb-4 mt-3">Utwórz konto</h2>
					<Card.Body>
						<Form>
							<Form.Group id="email" className="mb-2">
								<Form.Control
									type="email"
									ref={emailRef}
									placeholder="email@example.com"
									required
								/>
							</Form.Group>
							<Form.Group id="password" className="mb-2">
								<Form.Control
									type="password"
									ref={passRef}
									placeholder="Hasło..."
									required
								/>
							</Form.Group>
							<Form.Group id="password-confirm" className="mb-2">
								<Form.Control
									type="password"
									ref={rePassRef}
									placeholder="Powtórz hasło..."
									required
								/>
							</Form.Group>
							<Button className="w-100">Sign Up!</Button>
						</Form>
						<div className="w-100 text-center mt-3">
							Masz już konto? <a href="#"> Zaloguj się!</a>
						</div>
					</Card.Body>
				</Card>
			</div>
		</Container>
	);
}
