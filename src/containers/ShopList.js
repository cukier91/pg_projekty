import React, { useEffect, useState } from "react";
import { Card, Button, Container, Row, Col } from "react-bootstrap";
import "./Containters.css";
import firebase from "../firebase";

export default function ShopList() {
	const [items, setItems] = useState([]);
	const [loading, setLoading] = useState(false);

	function getData() {
		setLoading(true);
		const ref = firebase.firestore().collection("Shop");
		ref.onSnapshot((querySnapshot) => {
			const items = [];
			querySnapshot.forEach((doc) => {
				items.push(doc.data());
			});
			setItems(items);
		});
	}

	useEffect(() => {
		getData();
	}, []);

	console.log(items);

	return (
		
			<div className="wrapper">
				{items.map(({ id, img, description, name, price }) => {
					return (
						<Card className="card-element" key={id}>
							<Card.Img variant="top" src={img} height="70%"/>
							<Card.Body>
								<Card.Title>{name}</Card.Title>
								<Card.Text>{description}</Card.Text>
								<Button variant="primary">{price} $ </Button>
							</Card.Body>
						</Card>
					);
				})}
			</div>
		
	);
}
