import React from "react";
import { Accordion, Card } from "react-bootstrap";

export const PostComponent = ({ item }) => {
	const { title, body } = item;
	return (
		<Accordion style={{ margin: 10 }}>
			<Card>
				<Card.Header>
						<h6 style={{ textAlign: "center" }}>{title}</h6>
				</Card.Header>
					<Card.Body>
						<p>{body}</p>
					</Card.Body>
			</Card>
		</Accordion>
	);
};
