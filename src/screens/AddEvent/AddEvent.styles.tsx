import { Dimensions, StatusBar } from "react-native";
import styled from "styled-components/native";

export const AddEventContainer = styled.View`
	color: #eee;
	display: flex;
	flex-direction: column;
	/* height: ${Dimensions.get("window").height + 30}px; */
	/* padding-top: ${StatusBar.currentHeight}px; */
	align-items: center;
`;

export const ScrollView = styled.ScrollView`
	background-color: #1c1c1c;
	margin: 0px 20px;
	width: 100%;
`;
