import React from "react";

import {Table, Button} from "react-bootstrap";
import { useSelector } from "react-redux";

export default function Basket() {
	const products = useSelector((state) => state.allProducts.products);
	console.log(products);

	return(
       <div className="container">
           <div style= {{margin:'auto', marginTop:'3%', marginBottom:'3%'}}>
				<Table bordered hover>
					<thead>
						<tr>
							<th>Nr.</th>
							<th>IMG</th>
							<th>Nazwa</th>
							<th>Cena</th>
							<th>Ilość</th>
							<th>#</th>
						</tr>
					</thead>
					<tbody>
						{products.map(({id, quantity, img, name, price}, counter=0) => {
							counter++
							return(
								<tr key={id}>
									<td>{counter}</td>
									<td><img src={`${img}`} className="img-basket"></img></td>
									<td>{name}</td>
									<td>{price} zł</td>
									<td>{quantity}</td>
									<td><Button>Usuń</Button></td>

								</tr>
							)
						})}
					</tbody>
				</Table>
			</div>
       </div>
    )
}
