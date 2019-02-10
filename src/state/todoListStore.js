import { observable, computed, action, toJS } from "mobx";
import { persist } from "mobx-persist";

class TodoListStore {
	@persist("list") @observable todos = [
		{ value: "Get groceries for dinner", done: true },
		{ value: "Pick up Amit's Birthday present", done: false },
		{ value: "Book flights to Vancouver", done: false },
		{ value: "Finalize presentation", done: false },
	];
	@persist("list") @observable filteredTodo = [];

	constructor() {
		this.filteredTodo = this.todos;
	}

	// Get the latest list of todos
	@computed
	get getTaskList() {
		return toJS(this.filteredTodo);
	}
	// get length of active todos
	@computed
	get getNumberOfActiveTasks() {
		return toJS(this.filteredTodo.filter(({ done }) => !done)).length;
	}
	// get length of active todos
	@computed
	get getNumberOfCompletedTasks() {
		return toJS(this.filteredTodo.filter(({ done }) => !!done)).length;
	}
	// Update a task which it was done status by index
	@action updateTaskStatus = ({ index, done }) => {
		this.todos[index].done = done;

		this.filteredTodo = this.todos;
	};
	// Delete a task by index
	@action deleteTask = index => {
		this.todos = this.todos.filter((task, taskIndex) => taskIndex !== index);

		this.filteredTodo = this.todos;
	};
	// Delete all completed tasks
	@action deleteCompletedTasks = () => {
		this.todos = this.todos.filter(({ done }) => !done);

		this.filteredTodo = this.todos;
	};
	// Add a new task into todo list
	@action addNewTask = value => {
		this.todos.unshift({ value, done: false });

		this.filteredTodo = this.todos;
	};

	// Filter todo list via by status argv.
	@action filterTasksBy = status => {
		this.filteredTodo = this.todos.filter(({ done }) => {
			switch (status) {
				case "completed":
					return !!done;
				case "active":
					return !done;
				default:
					return true;
			}
		});
	};
}

export default TodoListStore;
