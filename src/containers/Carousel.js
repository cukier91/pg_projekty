import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "./Containters.css";

export default function Carousels() {
	return (
		<div className="container">
			<Carousel>
				<Carousel.Item>
					<img
						className="carousel-img"
						src="https://cdn.pixabay.com/photo/2014/08/26/19/21/document-428338_960_720.jpg"
						alt="First slide"
					/>
					<Carousel.Caption>
						<h3>Wyceny indywidualne</h3>
						<p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item>
					<img
						className="carousel-img"
						src="https://cdn.pixabay.com/photo/2015/07/11/14/53/plumbing-840835_960_720.jpg"
						alt="Second slide"
					/>

					<Carousel.Caption>
						<h3>Wykończenia</h3>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item>
					<img
						className="carousel-img"
						src="https://cdn.pixabay.com/photo/2017/02/23/15/39/plan-2092499_960_720.jpg"
					/>

					<Carousel.Caption>
						<h3>Projektowanie</h3>
						<p>
							Praesent commodo cursus magna, vel scelerisque nisl consectetur.
						</p>
					</Carousel.Caption>
				</Carousel.Item>
			</Carousel>
		</div>
	);
}
