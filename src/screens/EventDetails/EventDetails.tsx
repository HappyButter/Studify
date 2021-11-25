import React from "react";
import { Button } from "react-native";
import { Container, Text } from "./EventDetails.styles";
import Center from "@/utils/Center";
import { SecondViewRouteProps } from "@/types/types";

const EventDetails: React.FC<SecondViewRouteProps<"EventDetails">> = ({ navigation }) => {
	return (
		<Center>
			<Text>TU BĘDĄ DETALE!!!</Text>
			<Button title="Go Back" onPress={() => navigation.goBack()} />
		</Center>
	);
};

export default EventDetails;
