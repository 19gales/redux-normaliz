import { connect } from "react-redux";

import { AppComponent } from "./app-component";
import { getAllData } from "./app-actions";

const mapDispatchProps = {
	getAllData
};

export const App = connect(null, mapDispatchProps)(AppComponent);
