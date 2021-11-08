import { Dimensions } from "react-native";
import styled from "styled-components/native";

export const HeaderContainer = styled.View`
	background-color: #1c1c1c;
	height: ${Math.floor(Dimensions.get("window").height * 0.2)}px;
	/* height: 15%; */
	/* margin-bottom: 200%; */
	justify-content: center;
`;

export const HeaderText = styled.Text`
	text-align: center;
	color: white;
	padding: 20px;
`;
