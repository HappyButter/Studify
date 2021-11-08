import React, { useCallback, useState, useEffect } from "react";
import { useFormikContext } from "formik";
import { Spinner } from "native-base";
import * as Location from "expo-location";
import { debounce } from "lodash";
import { Entypo } from "@expo/vector-icons";

import Center from "@/utils/Center";
import { AddressContainer, MapView, MapViewContainer } from "./Map.styles";
import { Alert } from "react-native";

interface PinCoords {
	latitude: number;
	longitude: number;
	latitudeDelta: number;
	longitudeDelta: number;
}

interface Address {
	country: string;
	city: string;
	street: string;
	houseNumber: string;
	district: string;
}

const ifValid = (value: string | null) => {
	return value || "";
};

interface MapProps {}

const Map: React.FC<MapProps> = () => {
	const { setFieldValue } = useFormikContext();

	const [isLoading, setIsLoading] = useState(true);
	const [pinCoords, setPinCoords] = useState<PinCoords>({
		latitude: 50.073658,
		longitude: 14.41854,
		latitudeDelta: 0.0122,
		longitudeDelta: 0.0121,
	});

	const [currentAddress, setCurrentAddress] = useState<Address>({
		country: "",
		city: "",
		street: "",
		houseNumber: "",
		district: "",
	});
	const [displayCurrentAddress, setDisplayCurrentAddress] = useState("");

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
				setPinCoords((prev) => {
					return { ...prev, latitude, longitude };
				});

				setIsLoading(false);
			}
		} catch (e) {
			getCurrentLocation();
			setIsLoading(true);
		}
	};

	const getAddress = async (coords: PinCoords) => {
		setPinCoords(coords);

		if (coords) {
			const { latitude, longitude } = coords;
			let response = await Location.reverseGeocodeAsync({
				latitude,
				longitude,
			});
			let receivedAddress = response[0];

			setCurrentAddress({
				country: ifValid(receivedAddress.country),
				city: ifValid(receivedAddress.city),
				street: ifValid(receivedAddress.street),
				houseNumber: ifValid(receivedAddress.name),
				district: ifValid(receivedAddress.district),
			});
		}
	};

	const setAddressFormFields = () => {
		setFieldValue("latitude", pinCoords.latitude);
		setFieldValue("longitude", pinCoords.longitude);

		setFieldValue("country", currentAddress.country);
		setFieldValue("city", currentAddress.city);
		setFieldValue("street", currentAddress.street);
		setFieldValue("houseNumber", currentAddress.houseNumber);
		setFieldValue("district", currentAddress.district);
	};

	useEffect(() => {
		getCurrentLocation();
	}, []);

	useEffect(() => {
		let address = `
		Street: ${currentAddress.street} ${currentAddress.houseNumber}
		City: ${currentAddress.city}
		District: ${currentAddress.district}
		Country: ${currentAddress.country}
	`;

		setDisplayCurrentAddress(address);
	}, [currentAddress]);

	const handleAddressChange = useCallback(
		debounce((coords) => {
			getAddress(coords);
			setAddressFormFields();
		}, 1000),
		[currentAddress, displayCurrentAddress]
	);

	if (isLoading) {
		return (
			<Center>
				<Spinner size="lg" />
			</Center>
		);
	}

	return (
		<>
			<MapViewContainer>
				<Entypo
					name="location-pin"
					style={{
						zIndex: 3,
						position: "absolute",
						marginTop: -47,
						marginLeft: -25,
						left: "50%",
						top: "50%",
					}}
					size={50}
					color={"#f00"}
				/>
				<MapView
					onRegionChange={handleAddressChange}
					showsUserLocation={true}
					initialRegion={pinCoords}
				></MapView>
			</MapViewContainer>

			<AddressContainer>{"Selected event address:\n" + displayCurrentAddress}</AddressContainer>
		</>
	);
};

export default Map;
