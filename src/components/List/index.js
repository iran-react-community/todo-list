import React from "react";
import styled from "@emotion/styled";

// ant components
import List from "antd/es/list";
import Button from "antd/es/button";
import { Tooltip, Checkbox } from "antd";

const TodoBox = styled.div`
	background: ${({ done }) => (done ? "#92C65A" : "#f5f5f5")};
	padding: 15px;
	border-radius: 5px;
	box-shadow: 0px 5px 15px rgba(50, 50, 50, 0.1);
	border: 1px solid ${({ done }) => (done ? "#92c65a" : "#cfcfcf")};

	& .ant-checkbox-checked {
		&:before {
			border-color: #53861d;
		}

		.ant-checkbox-inner {
			background-color: #53861d;
			border-color: #53861d;
		}
	}

	& .ant-checkbox-wrapper {
		user-select: none;

		& > span:last-of-type {
			margin-left: 5px;
			text-decoration: ${({ done }) => (done ? "line-through" : "none")};
			color: ${({ done }) => (done ? "#FFF" : "rgba(0, 0, 0, 0.65)")};
		} /* Checkbox label */
	} /* checkbox wrapper */
`;

const TodoList = ({ value: { value, done }, index, onChange, onDelete }) => {
	return (
		<List css={{ marginBottom: 15 }}>
			<TodoBox done={done}>
				<Checkbox checked={done} onChange={e => onChange({ index, done: e.target.checked })}>
					{value}
				</Checkbox>
				<Tooltip placement="topLeft" title="Delete task">
					<Button type="danger" shape="circle" icon="delete" css={{ float: "right", marginTop: -5 }} onClick={() => onDelete(index)} />
				</Tooltip>
			</TodoBox>
		</List>
	);
};

export default TodoList;
