import { observable } from "mobx";

import todoListStore from "./todoListStore";

// Compact and organization other stores and main store in one place.
export default class AppStore {
	@observable serverSide = false;

	constructor() {
		this.todoListStore = new todoListStore(this);
	}

	stores() {
		const appStore = this;
		return {
			appStore,
			todoList: this.todoListStore,
		};
	}
}
