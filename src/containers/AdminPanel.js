import React, { useEffect, useState } from "react";
import { Table, Button, Form } from "react-bootstrap";
import "./Containters.css";
import firebase from "../firebase";
import bell from "../img/bell.svg";
import bellX from "../img/bell-x.svg";
import { v4 as uuidv4 } from "uuid";

export default function AdminPanel() {
	const [form, setForm] = useState({
		id: "",
		name: "",
		description: "",
		price: "",
		img: "",
	});
	const [items, setItems] = useState([]);
	const ref = firebase.firestore().collection("Contact");
	const refShop = firebase.firestore().collection("Shop");

	function addProduct(e, product) {
		e.preventDefault()
		console.log(product)
		refShop
			.doc(product.id)
			.set(product)
			.catch((err) => {
				console.log(err);
			});
	}

	function setNewProduct(e) {
		const { name, value } = e.target;
		setForm((prevState) => {
			return {
				...prevState,
				[name]: value,
			};
		});
	}

	function getData() {
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

	function deleteMsg(id) {
		ref
			.doc(id)
			.delete()
			.catch((err) => {
				console.log(err);
			});
	}

	function updateBell(updateMsg) {
		ref
			.doc(updateMsg.id)
			.update(updateMsg)
			.catch((err) => {
				console.log(err);
			});
	}


	return (
		<div className="container">
			<Table striped bordered hover>
				<thead>
					<tr>
						<th>Nr.</th>
						<th>E-mail</th>
						<th>Telefon</th>
						<th>Wiadomość</th>
						<th>Przeczytana</th>
						<th>Usuń</th>
					</tr>
				</thead>
				<tbody>
					{items.map(({ id, mail, msg, phone, read }, counter = 0) => {
						counter++;
						return (
							<tr key={id} className={`${!read ? "bold" : ""}`}>
								<td>{counter}</td>
								<td>{mail}</td>
								<td>{phone}</td>
								<td>{msg}</td>
								<td>
									<Button
										variant="Light"
										onClick={() =>
											updateBell({
												id: id,
												mail: mail,
												msg: msg,
												phone: phone,
												read: read === false ? true : false,
											})
										}
									>
										<img src={!read ? bell : bellX} />
									</Button>
								</td>
								<td>
									<Button onClick={() => deleteMsg(id)}>Usuń</Button>
								</td>
							</tr>
						);
					})}
				</tbody>
			</Table>
			<div className="form" style={{ maxWidth: "100%" }}>
				<Form style={{ maxWidth: "80%" }}>
					<Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
						<Form.Label>Nazwa</Form.Label>
						<Form.Control
							value={form.name}
							name="name"
							type="text"
							placeholder="Nazwa produktu..."
							onChange={setNewProduct}
						/>
					</Form.Group>
					<Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
						<Form.Label>Cena</Form.Label>
						<Form.Control
							name="price"
							type="number"
							placeholder="0"
							value={form.price}
							onChange={setNewProduct}
						/>
					</Form.Group>
					<Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
						<Form.Label>Opis:</Form.Label>
						<Form.Control
							name="description"
							as="textarea"
							rows={3}
							placeholder="Opis produktu..."
							value={form.description}
							onChange={setNewProduct}
						/>
					</Form.Group>
					<Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
						<Form.Label>url</Form.Label>
						<Form.Control
							name="img"
							type="text"
							placeholder="http://"
							value={form.img}
							onChange={setNewProduct}
						/>
					</Form.Group>
					<Button
						type="submit"
						variant="primary"
						onClick={(e) =>
							addProduct(e,{
								id: uuidv4(),
								name: form.name,
								description: form.description,
								price: form.price,
								img: form.img,
							})
						}
					>
						Wyślij
					</Button>
				</Form>

				<div className="img-overview">
					<img className="img" src={`${form.img}`} />
				</div>
			</div>
		</div>
	);
}
