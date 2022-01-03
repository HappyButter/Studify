import styled from "styled-components/native";

export const SendMessageContainer = styled.View`
	display: flex;
	flex-direction: row;

	background-color: #1c1c1c;
	color: #999999;
	margin: 0 10px;
	padding: 10px 20px;
	font-size: 18px;
	border-radius: 12px;
	margin-bottom: 0;
`;

export const CustomTextInput = styled.TextInput`
	background-color: #303245;
	color: #eee;
	align-items: center;
	align-self: center;
	width: 80%;
	margin: 10px;
	padding: 10px 20px;
	font-size: 18px;
	border-radius: 12px;
`;

export const CustomPressableButton = styled.TouchableOpacity`
	background-color: #d37d6b;
	opacity: ${(props) => (props.disabled ? 0.3 : 1)};
	border-radius: 50px;
	color: #eee;
	align-items: center;
	align-self: center;
	margin: 10px;
	padding: 10px;
	width: 20%;
`;
