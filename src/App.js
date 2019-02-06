import React, { Component } from "react";
import { Layout } from "antd";

import TodoList from "./components/todoList";

import { observer, inject } from "mobx-react";

import "./scss/app.scss";

const { Content, Footer } = Layout;

@inject("todoList")
@observer
class BootCamp extends Component {
	render() {
		return (
			<Layout style={{ minHeight: "100vh" }}>
				<Layout style={{ marginRight: 30 }}>
					<Content style={{ margin: "0 16px" }}>
						<div className="app-content">
							<TodoList />
						</div>
					</Content>
					<Footer style={{ textAlign: "center" }}>Made with Love by Ali Torki</Footer>
				</Layout>
			</Layout>
		);
	}
}

export default BootCamp;
