import React from "react";
import styled from "@emotion/styled";

const ActiveBox = styled.div`
	float: right;
	margin-top: 5px;
`;

const ActiveTasks = ({ value }) => {
	return <ActiveBox>{value}/Active Tasks</ActiveBox>;
};

export default ActiveTasks;
