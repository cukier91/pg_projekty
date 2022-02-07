import React, { useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import "./Containters.css";
import firebase from "../firebase";
import { v4 as uuidv4 } from "uuid";

export default function Pricing() {
	const [msg, setMsg] = useState("");
	const [phone, setPhone] = useState("");
	const [mail, setMail] = useState("");
	const [display, setDisplay] = useState("none");
	const ref = firebase.firestore().collection("Contact");

	function addMessage(e, newMessage) {
		ref
			.doc(newMessage.id)
			.set(newMessage)
			.catch((err) => {
				console.log(err);
			});
		e.preventDefault();
		setDisplay("");
		setMail("");
		setPhone("");
		setMsg("");
	}

	return (
		<div className="form">
			<div>
				<h3 style={{ marginBottom: "4%" }}>Masz pytanie? </h3>
				<Alert style={{ display: display }} variant="info">
					Dziękujęmy za wiadomość
				</Alert>
			</div>

			<Form>
				<Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
					<Form.Label>Adres e-mail</Form.Label>
					<Form.Control
						value={mail}
						type="email"
						placeholder="name@example.com"
						onChange={(e) => setMail(e.target.value)}
					/>
				</Form.Group>
				<Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
					<Form.Label>Numer telefonu</Form.Label>
					<Form.Control
						type="phone"
						placeholder="Twój numer telefonu..."
						value={phone}
						onChange={(e) => setPhone(e.target.value)}
					/>
				</Form.Group>
				<Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
					<Form.Label>Wiadomość:</Form.Label>
					<Form.Control
						as="textarea"
						rows={3}
						placeholder="Twoja wiadomość..."
						value={msg}
						onChange={(e) => setMsg(e.target.value)}
					/>
				</Form.Group>
				<Button
					type="submit"
					variant="primary"
					onClick={(e) =>
						addMessage(e, { id: uuidv4(), mail, phone, msg, read: false })
					}
				>
					Wyślij
				</Button>
			</Form>
		</div>
	);
}
