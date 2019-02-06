import { observable, computed, action } from "mobx";

class TodoListStore {
	@observable todos = [];
	@observable filteredTodos = [];
	@observable status = "all";

	@computed get getTodoList() {
		return this.filteredTodos;
	}

	@action updateTodoStatus = status => {
		this.status = status;
	};
}

export default TodoListStore;
