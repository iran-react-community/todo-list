import React from "react";
import propTypes from "prop-types";

import styled from "@emotion/styled";
import { keyframes } from "@emotion/core";

const LineBox = styled.div`
	height: 2px;
	width: 100%;
	overflow: hidden;
	width: 100%;
	margin: 24px auto 40px;
`;

const lineAnimate = keyframes`
	0%,
	25% {
		transform: translateX(-64px);
	}
	75%,
	100% {
		transform: translateX(372px);
	}
`;

const LineBar = styled.div`
	height: 100%;
	width: 64px;
	transform: translateX(-64px);
	animation: ${lineAnimate} 3s ease-in-out 1.5s infinite;
	background: ${({ from, to }) => `linear-gradient(to right, ${from} 0%, ${to} 100%)`};
`;

const Line = ({ from, to }) => (
	<LineBox>
		<LineBar from={from} to={to} />
	</LineBox>
);

Line.propTypes = {
	from: propTypes.string,
	to: propTypes.string,
};
Line.defaultProps = {
	from: "rgba(24, 144, 255, 0)",
	to: "#1890ff",
};

export default React.memo(Line);
