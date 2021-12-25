import styled from "styled-components/native";

export const ProfileContainer = styled.View`
	display: flex;
	flex-direction: column;
	background-color: #1c1c1c;
	align-items: center;
	height: 100%;
	width: 100%;
`;

export const PersonDetails = styled.View`
	display: flex;
	flex-direction: row;

	background-color: #303245;
	color: #eee;
	width: 90%;
	height: 30%;
	margin: 10px;
	padding: 10px 20px;
	font-size: 18px;
	border-radius: 12px;
`;

export const PersonDetailsAvatar = styled.View`
	align-items: center;
	align-self: center;
	width: 40%;
`;

export const PersonDetailsData = styled.View`
	align-self: center;
	width: 50%;
`;

export const PersonDetailsGoBackArea = styled.View`
	align-items: center;
	justify-content: flex-start;
	width: 10%;
	padding-right: 10px;
`;

export const PersonDetailsText = styled.Text`
	color: #eee;
	font-size: 18px;
	font-weight: bold;
`;

export const GoBackButton = styled.TouchableOpacity`
	background-color: #d37d6b;
	border-radius: 20px;
	width: 50px;
	height: 50px;
	justify-content: center;
	align-items: center;
`;

export const EventContainer = styled.View`
	background-color: #d37d6b;
	/* display: flex;
	flex-direction: row;

	justify-content: center;
	align-items: center;
	color: #eee;
	width: 90%;
	height: 20%;
	margin: 10px;
	padding: 10px 20px;
	font-size: 18px;
	border-radius: 12px; */
`;

export const CustomFlatList = styled.FlatList`
	position: relative;
	display: flex;
	flex-direction: column;
	width: 100%;
`;
