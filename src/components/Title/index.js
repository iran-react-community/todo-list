import React from "react";
import styled from "@emotion/styled";

import Line from "../Line";
import { GradTealBlue } from "../Colors";

const Wrap = styled.div`
	text-align: center;
	font-size: 1.3em;
	width: 65%;
	margin: 10px auto;
	color: #373352;
	font-weight: 300;
	margin-bottom: 30px;
`;

const Title = () => {
	return (
		<Wrap>
			<GradTealBlue>To-do list application</GradTealBlue>
			<Line from="#00b5c0" to="#0091d9" />
		</Wrap>
	);
};

export default Title;
