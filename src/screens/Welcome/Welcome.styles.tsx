import { Dimensions } from "react-native";
import styled from "styled-components/native";

export const WelcomeContainer = styled.View`
	display: flex;
	flex-direction: column;
	background-color: #1c1c1c;
	align-items: center;
`;

export const WelcomeView = styled.View`
	justify-content: center;
	align-items: center;
	height: ${Dimensions.get("window").height}px;
	margin: 0px 20px;
	width: 100%;
`;

export const Title = styled.Text`
	color: #eee;
	padding: 10px 20px;
	text-align: center;
	font-size: 32px;
	font-weight: bold;
`;

export const CustomTouchableOpacity = styled.Pressable`
	background-color: #d37d6b;
	border-radius: 12px;
	margin: 10px 50px;
	padding: 10px 20px;
`;

export const ButtonTitle = styled.Text`
	color: #eee;
	padding: 10px 20px;
	text-align: center;
	font-size: 18px;
`;
