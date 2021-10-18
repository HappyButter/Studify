import React, { useState, useEffect } from "react";
import { StyleSheet, Dimensions, Alert, Text, Button } from "react-native";

import { Spinner, View } from "native-base";
import MapView from "react-native-map-clustering";
import { Marker, Callout } from "react-native-maps";
import { Entypo } from "@expo/vector-icons";
import * as Location from "expo-location";

import Center from "@/utils/Center";
import { AuthorizedRouteProps } from "@/types/types";

// tmp mock
const pins = [
	{
		latitude: 50.0659198,
		longitude: 19.9145029,
		name: "1_1",
		description: "Bardzo ładne wydarzenie 1",
		organizer: "Roman",
	},
	{
		latitude: 51.3619772,
		longitude: 20.6211787,
		name: "2_2",
		description: "Bardzo ładne wydarzenie 2",
		organizer: "Roman",
	},
	{
		latitude: 51.3619772,
		longitude: 20.6111787,
		name: "3_3",
		description: "Bardzo ładne wydarzenie 3",
		organizer: "Roman",
	},
	{
		latitude: 51.3439772,
		longitude: 20.6311787,
		name: "4_4",
		description: "Bardzo ładne wydarzenie 4",
		organizer: "Roman",
	},
];

const MainMap: React.FC<AuthorizedRouteProps<"Map">> = ({ navigation }) => {
	const [isLoading, setIsLoading] = useState(true);
	const [userCoords, setUserCoords] = useState({ latitude: 50.073658, longitude: 14.41854 });

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

	// const EpicMinus = ({ setEpicCounter: (prev: number) => void }): React.ReactElement => {
	// 	return (
	// 		<View>
	// 			<Text>-</Text>
	// 			<Button title="Press me" onPress={() => setEpicCounter((prev) => prev - 1)} />
	// 		</View>
	// 	);
	// };

	const epicDisplay = () => {
		const [epicCounter, setEpicCounter] = useState(0);

		return (
			<View>
				{/* <EpicMinus setEpicCounter={setEpicCounter} /> */}
				{/* <Counter epicCounter={epicCounter} />
				<EpicPlus setEpicCounter={setEpicCounter} /> */}
				<Text>{"It works!"}</Text>
			</View>
		);
	};

	if (isLoading) {
		return (
			<Center>
				<Spinner size="lg" />
			</Center>
		);
	}

	return (
		<Center>
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
					{pins.map((pin) => (
						<Marker
							coordinate={{
								longitude: pin.longitude,
								latitude: pin.latitude,
							}}
							title="Some Pin"
							description="Brand new pin"
						>
							{/* <View style={styles.circle}>
								<View style={styles.core} />
								<View style={styles.stroke} />
							</View> */}
							<Entypo name="location-pin" size={30} color="black" />
							{/* <Callout>
								<View>
									<Text>{pin.description}</Text>
								</View>
							</Callout> */}
						</Marker>
					))}
				</MapView>
			</View>
		</Center>
	);
};

export default MainMap;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
	map: {
		width: Dimensions.get("window").width,
		height: Dimensions.get("window").height,
	},
	circle: {
		width: 26,
		height: 26,
		borderRadius: 50,
	},
	stroke: {
		backgroundColor: "#ffffff",
		borderRadius: 50,
		width: "100%",
		height: "100%",
		zIndex: 1,
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

// const [locationServiceEnabled, setLocationServiceEnabled] = useState(false);
// const [displayCurrentAddress, setDisplayCurrentAddress] = useState(
// 	"Wait, we are fetching you location..."
// );

// useEffect(() => {
// 	CheckIfLocationEnabled();
// 	GetCurrentLocation();
// }, []);

// const CheckIfLocationEnabled = async () => {
// 	let enabled = await Location.hasServicesEnabledAsync();

// 	if (!enabled) {
// 		Alert.alert(
// 			"Location Service not enabled",
// 			"Please enable your location services to continue",
// 			[{ text: "OK" }],
// 			{ cancelable: false }
// 		);
// 	} else {
// 		setLocationServiceEnabled(enabled);
// 	}
// };

// const GetCurrentLocation = async () => {
// 	let { status } = await Location.requestForegroundPermissionsAsync();

// 	if (status !== "granted") {
// 		Alert.alert(
// 			"Permission not granted",
// 			"Allow the app to use location service.",
// 			[{ text: "OK" }],
// 			{ cancelable: false }
// 		);
// 	}

// 	let { coords } = await Location.getCurrentPositionAsync();

// 	if (coords) {
// 		const { latitude, longitude } = coords;
// 		let response = await Location.reverseGeocodeAsync({
// 			latitude,
// 			longitude,
// 		});

// 		for (let item of response) {
// 			let address = `${item.name}, ${item.street}, ${item.postalCode}, ${item.city}`;

// 			setDisplayCurrentAddress(address);
// 		}
// 	}
// };
