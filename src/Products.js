import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const Products = () => {
	const url = "https://fakestoreapi.com/products";
	const [products, setProducts] = useState([]);

	const getDataProducts = async () => {
		try {
			const response = await fetch(url);
			const dataProduct = await response.json();
			setProducts(dataProduct);
		} catch (error) {
			console.error("Error fetching data:", error);
		}
	};

	useEffect(() => {
		getDataProducts();
	});

	return (
		<div className="container">
			<h1>My Products</h1>
			<div className="row">
				{products.map((product) => {
					return (
						<div className="col-4">
							<CardProduct
								key={product.id}
								title={product.title}
								price={product.price}
								description={product.description}
								image={product.image}
							/>
						</div>
					);
				})}
			</div>
		</div>
	);
};

function CardProduct(props) {
	return (
		<Card style={{ width: "18rem" }}>
			<Card.Img
				variant="top"
				src={props.image}
				style={{ maxWidth: "100%", height: "auto" }}
			/>
			<Card.Body>
				<Card.Title>{props.title}</Card.Title>
				<Card.Text>
					{props.description}
					<p>Price: {props.price} $</p>
				</Card.Text>
				<Button variant="primary">Go somewhere</Button>
			</Card.Body>
		</Card>
	);
}

export default Products;
