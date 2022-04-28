import { connect } from "react-redux";

import { AppComponent } from "./app-component";
import { getAllData } from "./app-actions";

const mapDispatchToProps = {
	getAllData
};

export const AppController = connect(null, mapDispatchToProps)(AppComponent);
