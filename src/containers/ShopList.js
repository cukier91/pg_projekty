import React, { useEffect, useState } from "react";
import { Card, Button, Container, Row, Col } from "react-bootstrap";
import "./Containters.css";
import firebase from "../firebase";

export default function ShopList() {
	const [items, setItems] = useState([]);
	

	function getData() {
		const ref = firebase.firestore().collection("Shop");
		console.log(ref)
		ref.onSnapshot((querySnapshot) => {
			const items = [];
			querySnapshot.forEach((doc) => {
				items.push(doc.data());
				console.log(doc.data())
			});
			setItems(items);
		
		});
	}

	useEffect(() => {
		getData();
	}, []);

	console.log(items);

	return (
		<Row className="wrapper">
			{items.map(({ id, img, description, name, price }) => {
				return (
					<Col lg={4} key={id}>
						<Card className="card-element" key={id}>
							<Card.Img variant="top" src={img} height="70%" />
							<Card.Body>
								<Card.Title>{name}</Card.Title>
								<Card.Text>{description}</Card.Text>
								<Button variant="primary">{price} $ </Button>
							</Card.Body>
						</Card>
					</Col>
				);
			})}
		</Row>
	);
}
