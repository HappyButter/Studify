import React from "react";

import { UnauthorizedRouteProps } from "@/types/types";
import {
	CustomTouchableOpacity,
	ButtonTitle,
	WelcomeView,
	WelcomeContainer,
	Title,
} from "./Welcome.styles";

const Welcome: React.FC<UnauthorizedRouteProps<"Welcome">> = ({ navigation }) => {
	return (
		<WelcomeContainer>
			<WelcomeView>
				<Title>
					Studify
					{"\n"}
				</Title>
				<CustomTouchableOpacity onPress={() => navigation.navigate("Register")}>
					<ButtonTitle>Let's get started!</ButtonTitle>
				</CustomTouchableOpacity>
			</WelcomeView>
		</WelcomeContainer>
	);
};

export default Welcome;
