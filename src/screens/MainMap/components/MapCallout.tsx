import React from "react";
import { Divider } from "native-base";

import { Container, Text } from "./MapCallout.styles";

interface MapCalloutProps {
	eventName: string;
}

const MapCallout: React.FC<MapCalloutProps> = ({ eventName }) => {
	return (
		<Container>
			<Text>{eventName}</Text>
			<Divider my={2} />
			<Text>{eventName}</Text>
		</Container>
	);
};

export default MapCallout;
