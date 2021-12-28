import { Dimensions, StatusBar, TouchableOpacityProps } from "react-native";
import styled from "styled-components/native";

export const CustomTextInput = styled.TextInput`
	background-color: #303245;
	color: #eee;
	width: 70%;
	margin: 10px;
	padding: 10px 20px;
	font-size: 18px;
	border-radius: 12px;
`;

export const CustomPressableButton = styled.TouchableOpacity`
	background-color: #d37d6b;
	opacity: ${(props) => (props.disabled ? 0.3 : 1)};
	border-radius: 12px;
	color: #eee;
	margin: 10px;
	padding: 10px 20px;
	width: 70%;
`;

export const CustomPressableLink = styled.Pressable`
	width: 70%;
`;

export const ButtonTitle = styled.Text`
	color: #eee;
	padding: 10px 20px;
	text-align: center;
	font-size: 18px;
`;

export const PressableLinkTitle = styled.Text`
	color: #d37c6bc1;
	padding: 10px 20px;
	text-align: center;
	font-size: 15px;
`;
