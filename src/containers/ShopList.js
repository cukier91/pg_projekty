import React, { useEffect, useState } from "react";
import { Card, Button, Container, Row, Col, ListGroup } from "react-bootstrap";
import "./Containters.css";
import firebase from "../firebase";
import heart from "../img/heart.png";
import basket from "../img/backet.png";

export default function ShopList() {
	const [items, setItems] = useState([]);

	function getData() {
		const ref = firebase.firestore().collection("Shop");
		console.log(ref);
		ref.onSnapshot((querySnapshot) => {
			const items = [];
			querySnapshot.forEach((doc) => {
				items.push(doc.data());
				console.log(doc.data());
			});
			setItems(items);
		});
	}

	useEffect(() => {
		getData();
	}, []);

	console.log(items);

	return (
		<div className="shop-list">
			{items.map(({ id, img, description, name, price }) => {
				return (
					// <Col lg={4} key={id}>
					// 	<Card className="card-element" key={id}>
					// 		<Card.Img variant="top" src={img} height="70%" />
					// 		<Card.Body>
					// 			<Card.Title>{name}</Card.Title>
					// 			<Card.Text>{description}</Card.Text>
					// 			<Button variant="primary">{price} $ </Button>
					// 		</Card.Body>
					// 	</Card>
					// </Col>

					<ListGroup horizontal className="shop-container" key={id}>
						<ListGroup.Item style={{ justifyItems: "center" }}>
							<img className="shop-img" src={img} />
						</ListGroup.Item>
						<ListGroup className="shop-item">
							<ListGroup.Item
								className="shop-items"
								style={{ fontWeight: "500" }}
							>
								{name}
							</ListGroup.Item>
							<ListGroup.Item
								className="shop-items"
								style={{ fontWeight: "300" }}
							>
								{description}
							</ListGroup.Item>
							<ListGroup.Item
								className="shop-items"
								style={{ fontWeight: "700" }}
							>
								{price} zł
							</ListGroup.Item>
							<ListGroup.Item className="shop-items">
								<img className="shop-button" src={basket} type="button" />
								<img className="shop-button" src={heart} type="button" />
							</ListGroup.Item>
						</ListGroup>
					</ListGroup>
				);
			})}
		</div>
	);
}
