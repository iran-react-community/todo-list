import React, { Component, Fragment } from "react";
import { Empty, Button } from "antd";
// store
import { observer, inject } from "mobx-react";

import Maybe from "../../components/Maybe";
import Map from "../../components/Map";

import Title from "../../components/Title";
import List from "../../components/List";
import AddTask from "../../components/AddTask";
import FilterTodo from "../../components/Filter";
import ActiveTasks from "../../components/ActiveTasks";

@inject("todoList")
@observer
class TaskList extends Component {
	constructor(props) {
		super(props);

		// binding prototypes
		this.addNewTask = this.addNewTask.bind(this);
		this.onChangeTask = this.onChangeTask.bind(this);
		this.onDeleteTask = this.onDeleteTask.bind(this);
		this.onChangeFilter = this.onChangeFilter.bind(this);
		this.deleteCompletedTasks = this.deleteCompletedTasks.bind(this);
	}

	/**
	 * Update a task by index and replace the new done value with old value.
	 * @param {Object} {index, done}
	 */
	onChangeTask({ index, done }) {
		this.props.todoList.updateTaskStatus({ index, done });
	}

	/**
	 * Delete a task by index
	 * @param {Number} index
	 */
	onDeleteTask(index) {
		this.props.todoList.deleteTask(index);
	}
	/**
	 * Delete all completed tasks
	 */
	deleteCompletedTasks() {
		this.props.todoList.deleteCompletedTasks();
	}
	/**
	 * Change tasks fileter to "uncompleted", "active" or "all"
	 * @param {String} filter
	 */
	onChangeFilter(filter) {
		this.props.todoList.filterTasksBy(filter);
	}
	/**
	 * Add a new task from search input box value
	 * @param {String} value
	 */
	addNewTask(value) {
		this.props.todoList.addNewTask(value);
	}

	render() {
		const { todoList } = this.props;

		return (
			<Fragment>
				<Title />
				<AddTask onChange={this.addNewTask} />
				<FilterTodo onChange={this.onChangeFilter} />

				<ActiveTasks value={todoList.getNumberOfActiveTasks} />

				<Map data={todoList.getTaskList} name="todo">
					<List onChange={this.onChangeTask} onDelete={this.onDeleteTask} />
				</Map>
				<Maybe condition={todoList.getTaskList.length === 0}>
					<Empty />
				</Maybe>

				<Button type="danger" icon="delete" onClick={this.deleteCompletedTasks}>
					Delete all completed tasks
				</Button>
			</Fragment>
		);
	}
}

export default TaskList;
