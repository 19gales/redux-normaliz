import React from "react";
import { Button, Container } from "react-bootstrap";
import { Posts } from "../posts";

export const AppComponent =(props)=> {
		const { getAllData } = props;
		return (
			<Container className="main-app-container">
						<Button variant="primary" onClick={getAllData}>
							Загрузить данные
						</Button>
					<Posts />
			</Container>
		);
}
