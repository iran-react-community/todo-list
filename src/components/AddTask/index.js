import React from "react";
import styled from "@emotion/styled";
import { Input } from "antd";

const Search = Input.Search;

const SearchBox = styled.div`
	margin-bottom: 10px;
`;

class AddTask extends React.PureComponent {
	constructor(props) {
		super(props);

		this.onSearch = this.onSearch.bind(this);
	}

	onSearch(value) {
		if(!value) return;
		
		this.props.onChange(value);

		this.refs.todoInput.input.input.value = "";
	}

	componentDidMount() {
		this.refs.todoInput.focus();
	}

	render() {
		return (
			<SearchBox>
				<Search ref="todoInput" placeholder="Add a new task" enterButton="Add" size="large" onSearch={this.onSearch} allowClear />
			</SearchBox>
		);
	}
}

export default AddTask;
