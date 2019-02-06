export const generateString = (length = -1) => {
	return Math.random()
		.toString(16)
		.slice(2, length);
};
