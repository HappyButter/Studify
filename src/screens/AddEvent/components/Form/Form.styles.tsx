import styled from "styled-components/native";

export const EventTextInput = styled.TextInput`
	background-color: #303245;
	color: #eee;
	margin: 10px;
	padding: 10px 20px;
	font-size: 18px;
	border-radius: 12px;
`;

export const CustomTouchableOpacity = styled.TouchableOpacity`
	background-color: #d37d6b;
	opacity: ${(props) => (props.disabled ? 0.3 : 1)};
	border-radius: 12px;
	color: #eee;
	margin: 10px;
	padding: 10px 20px;
`;

export const ButtonTitle = styled.Text`
	color: #eee;
	padding: 10px 20px;
	text-align: center;
	font-size: 18px;
`;
