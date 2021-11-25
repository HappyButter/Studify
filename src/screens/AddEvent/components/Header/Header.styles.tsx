import { Dimensions } from "react-native";
import styled from "styled-components/native";

export const HeaderContainer = styled.View`
	background-color: #925867;
	height: ${Math.floor(Dimensions.get("window").height * 0.18)}px;
	padding-top: 5%;
`;

export const HeaderText = styled.Text`
	text-align: center;
	color: #1c1c1c;
	/* margin-top: 20px; */
	/* padding-bottom: 20px; */
	font-size: 20px;
`;
