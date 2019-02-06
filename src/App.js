import React, { Component } from "react";
import styled from "@emotion/styled";
import { Layout } from "antd";

import TodoList from "./containers/TodoList";

import "./scss/app.scss";

const { Content, Footer } = Layout;
const Wrapper = styled.div`
	width: 560px;
	/* min-height: 300px; */
	margin: 50px auto;
	background-color: #fff;
	border-radius: 25px;
	padding: 20px;
	box-shadow: rgba(50, 50, 50, 0.1) 0px 10px 35px;
`;

class BootCamp extends Component {
	render() {
		return (
			<Layout style={{ minHeight: "100vh" }}>
				<Layout style={{ marginRight: 30 }}>
					<Content style={{ margin: "0 16px" }}>
						<Wrapper>
							<TodoList />
						</Wrapper>
					</Content>
					<Footer style={{ textAlign: "center" }}>Made with Love by Ali Torki</Footer>
				</Layout>
			</Layout>
		);
	}
}

export default BootCamp;
