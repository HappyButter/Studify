import { Dimensions, StatusBar } from "react-native";
import styled from "styled-components/native";

export const AddEventContainer = styled.View`
	color: #eee;
	display: flex;
	flex-direction: column;
	height: ${Dimensions.get("window").height + 30}px;
	/* padding-top: ${StatusBar.currentHeight}px; */
	align-items: center;
`;

export const ScrollView = styled.ScrollView`
	background-color: pink;
	margin: 0px 20px;
	width: 100%;
`;

export const StickyHeader = styled.Text`
	background-color: #1c1c1c;
	height: 100px;
	width: 100%;
`;

export const AddEventItem = styled.Text`
	min-height: 200px;
	background-color: blue;
	margin: 10px;
`;
