import React from "react";

import { Button, Heading } from "native-base";

import Center from "@/utils/Center";
import { UnauthorizedRouteProps } from "@/types/types";

const Welcome: React.FC<UnauthorizedRouteProps<"Welcome">> = ({ navigation }) => {
	return (
		<Center>
			<Heading size="md">
				Studify
				{"\n"}
				{"\n"}
				{"\n"}
			</Heading>
			<Button
				onPress={() => {
					navigation.navigate("Register");
				}}
			>
				Let's Get Started!
			</Button>
		</Center>
	);
};

export default Welcome;
