import React from "react";
import styled from "@emotion/styled";
import { Radio } from "antd";

const FilterBox = styled.div`
	margin-bottom: 40px;
	display: inline-block;
`;

const FilterTodo = ({ onChange }) => {
	return (
		<FilterBox>
			<Radio.Group defaultValue="all" buttonStyle="solid" onChange={e => onChange(e.target.value)}>
				<Radio.Button value="all">All</Radio.Button>
				<Radio.Button value="completed">Completed</Radio.Button>
				<Radio.Button value="active">Active</Radio.Button>
			</Radio.Group>
		</FilterBox>
	);
};

export default FilterTodo;
