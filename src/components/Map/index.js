import React, { cloneElement } from "react";
import PropTypes from "prop-types";

import Maybe from "../Maybe";
import { generateString } from "../../helpers";
/**
 * @description The component automatically transmits map callback data to all its sub - component children as prop.
 * @template
 * <Map data={[1,2,3,4]}>
 * 	<DisplayItems/> // Now DisplayItems has 2 prop by default which the value and index prop are adapted from map callback.
 * </Map>
 */
const Map = ({ children, data, name = generateString() }) => {
	const childComponents = data.map((value, index) => cloneElement(children, { value, index, key: `$${name}_${index}` }));

	return <Maybe condition={data.length !== 0}>{childComponents}</Maybe>;
};

Map.propTypes = {
	children: PropTypes.node.isRequired,
	data: PropTypes.array.isRequired,
};

export default Map;
