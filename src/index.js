import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
// Store and mobx
import { Provider } from "mobx-react";
import AppStore from "./state";

import * as serviceWorker from "./serviceWorker";

import "./scss/index.scss";
// create an instance of main app store
const appStore = new AppStore();

ReactDOM.render(
	<Provider {...appStore.stores()}>
		<App />
	</Provider>,
	document.getElementById("root"),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
