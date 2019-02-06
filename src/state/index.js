import { observable } from "mobx";
import { create } from "mobx-persist";

import todoListStore from "./todoListStore";

// Compact and organization other stores and main store in one place.
export default class AppStore {
	@observable serverSide = false;

	constructor() {
		this.todoListStore = new todoListStore(this);

		// Mobx Persist data [into localStorage by default]
		const hydratedTodoList = create();
		hydratedTodoList("todoList", this.todoListStore);
	}

	stores() {
		const appStore = this;
		return {
			appStore,
			todoList: this.todoListStore,
		};
	}
}
