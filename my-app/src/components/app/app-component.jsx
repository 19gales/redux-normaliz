import React from "react";
import { Posts } from "../posts";

export const AppComponent =(props)=> {
		const { getAllData } = props;
		return (
			<>
				<button variant="primary" onClick={getAllData}>Загрузить данные</button>
				<Posts />
			</>
		);
}
