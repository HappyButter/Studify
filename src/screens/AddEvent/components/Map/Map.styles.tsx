import { Dimensions } from "react-native";
import MapViewBase from "react-native-maps";
import styled from "styled-components/native";

const marginSize = 10;

export const MapViewContainer = styled.View`
	width: ${Dimensions.get("window").width - marginSize * 2}px;
	height: ${Math.floor(Dimensions.get("window").height / 3) - marginSize * 2}px;
	margin: ${marginSize}px;
	overflow: hidden;
	border-radius: 20px;
`;

export const MapView = styled(MapViewBase)`
	width: 100%;
	height: 100%;
`;

export const AddressContainer = styled.Text`
	background-color: #303245;
	color: #eee;
	margin: 10px;
	padding: 10px 20px;
	font-size: 16px;
	border-radius: 12px;
`;
