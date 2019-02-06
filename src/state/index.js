import { observable } from "mobx";

import todoListStore from "./todoListStore";

export default class AppStore {
	@observable serverSide = true;

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
