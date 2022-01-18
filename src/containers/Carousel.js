import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "./Containters.css";

export default function Carousels() {
	return (
		<div className="container">
			<Carousel>
				<Carousel.Item>
					<img
						className="d-block w-100"
						width="400px"
						height="600px"
						src="https://cdn.pixabay.com/photo/2017/04/24/13/37/architecture-2256489_960_720.jpg"
						alt="First slide"
					/>
					<Carousel.Caption>
						<h3>First slide label</h3>
						<p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item>
					<img
						className="d-block w-100"
                        width="auto"
						height="600px"
						src="https://cdn.pixabay.com/photo/2017/03/28/12/11/chairs-2181960_960_720.jpg"
						alt="Second slide"
					/>

					<Carousel.Caption>
						<h3>Second slide label</h3>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item>
					<img
						className="d-block w-100"
                        width="auto"
						height="600px"
						src="https://cdn.pixabay.com/photo/2019/11/07/17/49/live-4609507_960_720.jpg"
						alt="Third slide"
					/>

					<Carousel.Caption>
						<h3>Third slide label</h3>
						<p>
							Praesent commodo cursus magna, vel scelerisque nisl consectetur.
						</p>
					</Carousel.Caption>
				</Carousel.Item>
			</Carousel>
		</div>
	);
}
