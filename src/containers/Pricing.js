import React,{useState} from "react";
import { Form, Button} from "react-bootstrap";
import "./Containters.css";
import firebase from "firebase/app";
import { v4 } from "uuid";

export default function Pricing() {
	const [msg, setMsg] = useState("");
	const [phone, setPhone] = useState("");
    const [mail, setMail] = useState("")
    const ref = firebase.firestore().collection("Contact");

    function addMessage(newMessage){
        
    }

    console.log(mail, phone)
	return (
		<div className="form">
            <h3 style={{marginBottom:'4%'}}>Masz pytanie? </h3>
			<Form>
				<Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
					<Form.Label>Email address</Form.Label>
					<Form.Control value={mail} type="email" placeholder="name@example.com" onChange={(e) => setMail(e.target.value)} />
				</Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
					<Form.Label>Phone no.</Form.Label>
					<Form.Control type="phone" placeholder="Your phone no." value={phone} onChange={(e) => setPhone(e.target.value)}/>
				</Form.Group>
				<Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
					<Form.Label>Example textarea</Form.Label>
					<Form.Control as="textarea" rows={3} placeholder="Your question" />
				</Form.Group>
                <Button variant="primary">Wyślij</Button>
			</Form>
		</div>
	);
}
