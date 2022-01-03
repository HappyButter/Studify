import React, { useState, useEffect } from "react";
import { StyleSheet, Dimensions, Alert, Text, Button } from "react-native";
import { Spinner, View } from "native-base";
import MapView from "react-native-map-clustering";
import { Marker, Callout } from "react-native-maps";
import { Entypo } from "@expo/vector-icons";
import * as Location from "expo-location";

import Center from "@/utils/Center";
import { MainViewRouteProps } from "@/types/types.d";
import { MapCallout } from "./components";
import { colors } from "./utils";
import { useSelector } from "react-redux";
import { StoreState } from "@/state/reducers";
import { useNavigation } from "@react-navigation/native";

const MainMap: React.FC<MainViewRouteProps<"Map">> = ({ navigation }) => {
	const [isLoading, setIsLoading] = useState(true);
	const [userCoords, setUserCoords] = useState({ latitude: 50.073658, longitude: 14.41854 });
	const eventList = useSelector((store: StoreState) => store.events.eventList);

	const customNavigation = useNavigation();

	useEffect(() => {
		getCurrentLocation();
	}, []);

	const getCurrentLocation = async () => {
		try {
			let { status } = await Location.requestForegroundPermissionsAsync();

			if (status !== "granted") {
				Alert.alert(
					"Permission not granted",
					"Allow the app to use location service.",
					[{ text: "OK" }],
					{ cancelable: false }
				);
			}

			let { coords } = await Location.getCurrentPositionAsync();

			if (coords) {
				const { latitude, longitude } = coords;
				setUserCoords((prev) => {
					return { ...prev, latitude, longitude };
				});

				setIsLoading(false);
			}
		} catch (e) {
			getCurrentLocation();
			setIsLoading(true);
		}
	};

	if (isLoading) {
		return (
			<Center>
				<Spinner size="lg" />
			</Center>
		);
	}

	return (
		<View style={styles.container}>
			<MapView
				style={styles.map}
				showsUserLocation={true}
				initialRegion={{
					latitude: userCoords.latitude,
					longitude: userCoords.longitude,
					latitudeDelta: 0.0922,
					longitudeDelta: 0.0421,
				}}
			>
				{eventList.map((pin) => (
					<Marker
						key={pin.id}
						coordinate={{
							longitude: pin.longitude,
							latitude: pin.latitude,
						}}
					>
						<Entypo name="location-pin" size={55} color={colors[pin.eventType]} />
						<Callout
							onPress={() => {
								customNavigation.navigate(
									"SecondView" as never,
									{
										screen: "EventDetails",
										params: { eventId: pin.id },
									} as never
								);
							}}
						>
							<MapCallout eventName={pin.eventName} description={pin.description} />
						</Callout>
					</Marker>
				))}
			</MapView>
		</View>
	);
};

export default MainMap;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
		bottom: 10,
		top: 10,
	},
	map: {
		width: Dimensions.get("window").width - 10,
		height: Dimensions.get("window").height - 10,
	},
	core: {
		backgroundColor: "red",
		width: 24,
		position: "absolute",
		top: 1,
		left: 1,
		right: 1,
		bottom: 1,
		height: 24,
		borderRadius: 50,
		zIndex: 2,
	},
});
