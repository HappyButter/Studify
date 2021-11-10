import { Dimensions } from "react-native";
import styled from "styled-components/native";

export const HeaderContainer = styled.View`
	background-color: #925867;
	height: ${Math.floor(Dimensions.get("window").height * 0.2)}px;
	/* height: 15%; */
	/* margin-bottom: 200%; */
	justify-content: center;
`;

export const HeaderText = styled.Text`
	text-align: center;
	color: #1c1c1c;
	margin-top: 20px;
	padding: 20px 0;
	font-size: 20px;
`;
