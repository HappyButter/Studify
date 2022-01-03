import React from "react";
import { Divider } from "native-base";

import { Container, EventNameText, EventDescriptionText } from "./MapCallout.styles";

interface MapCalloutProps {
	eventName: string;
	description: string;
}

const MapCallout: React.FC<MapCalloutProps> = ({ eventName, description }) => {
	return (
		<Container>
			<EventNameText>{eventName}</EventNameText>
			<Divider my={2} color={"white"} />
			<EventDescriptionText>{description}</EventDescriptionText>
		</Container>
	);
};

export default MapCallout;
