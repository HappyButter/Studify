import styled from "styled-components/native";

export const ScrollView = styled.ScrollView`
	background-color: #1c1c1c;
	margin: 0px 20px;
	padding-top: 10px;
	padding-bottom: 100px;
	width: 100%;
`;

export const EventHeader = styled.View`
	display: flex;
	flex-direction: row;

	background-color: #303245;
	color: #eee;
	margin: 10px;
	padding: 10px 20px;
	font-size: 18px;
	border-radius: 12px;
`;

export const Avatar = styled.View`
	align-items: center;
	align-self: center;
	width: 40%;
`;

export const EventHeaderData = styled.View`
	align-self: center;
	width: 50%;
`;

export const EventHeaderGoBackArea = styled.View`
	align-items: center;
	justify-content: flex-start;
	width: 10%;
	padding-right: 10px;
`;

export const EventHeaderText = styled.Text`
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

export const EventContent = styled.Text`
	background-color: #303245;
	color: #eee;
	margin: 10px;
	padding: 10px 20px;
	font-size: 16px;
	border-radius: 12px;
`;

export const EventVoter = styled.View`
	display: flex;
	flex-direction: row;

	background-color: #303245;
	color: #999999;
	margin: 10px;
	padding: 10px 20px;
	font-size: 18px;
	border-radius: 12px;
	margin-bottom: 70px;
`;

export const VoterLeft = styled.TouchableOpacity`
	align-items: center;
	align-self: center;
	width: 40%;
`;

export const VoterTemperature = styled.View`
	align-items: center;
	align-self: center;
	width: 20%;
`;

export const VoterRight = styled.TouchableOpacity`
	align-items: center;
	align-self: center;
	width: 40%;
`;
