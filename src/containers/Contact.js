import React, { useState } from "react";
import "./Containters.css";
import { Card, Button, Container, Row, Col } from "react-bootstrap";
import Pricing from "./Pricing";

export default function Contact() {
	return (
		<>
			<div className="wrapper">
				<div className="contact-detail">
					<h2>Kontakt</h2>
					<br />
					<h5>biuro@pgprojekty.pl</h5>
					<br />
					<h5>ul. Mosiężna 31/43</h5>
					<h5>53-441 Wrocław</h5>
					<br />
					<h5>+48 601 840 707</h5>
					<br />
					<h5>NIP: 619 190 95 80</h5>
				</div>
				<div className="contact">
					<iframe
						className="maps"
						src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2505.360199649404!2d16.99702241600763!3d51.101814079570424!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470fc21bf2272bd1%3A0x6c8ee50a0a5bb424!2zTW9zacSZxbxuYSAzMSwgNTMtNDQxIFdyb2PFgmF3!5e0!3m2!1sen!2spl!4v1642702573259!5m2!1sen!2spl"
						loading="lazy"
					></iframe>
				</div>
			</div>
			<Pricing />
		</>
	);
}
