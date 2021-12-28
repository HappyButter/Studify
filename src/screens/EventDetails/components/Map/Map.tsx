import React, { useCallback, useState, useEffect } from "react";
import { Spinner } from "native-base";
import * as Location from "expo-location";
import { Marker } from "react-native-maps";
import { Entypo } from "@expo/vector-icons";

import Center from "@/utils/Center";
import { AddressContainer, MapView, MapViewContainer } from "./Map.styles";
import { EventTypeEnum } from "@/types/types.d";

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

interface MapProps {
	latitude: number;
	longitude: number;
	eventType: string;
}

const Map: React.FC<MapProps> = ({ latitude, longitude, eventType }) => {
	const [isLoading, setIsLoading] = useState(true);
	const [pinCoords, setPinCoords] = useState<PinCoords>({
		latitude: latitude,
		longitude: longitude,
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

	const getAddress = async () => {
		setIsLoading(true);
		try {
			if (!(pinCoords.longitude && pinCoords.latitude)) return;

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
		} catch (err) {
			console.log(err);
		}
		setIsLoading(false);
	};

	useEffect(() => {
		getAddress();
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
				<MapView
					showsUserLocation={true}
					// @ts-ignore
					initialRegion={pinCoords.latitude && pinCoords.longitude ? pinCoords : undefined}
				>
					<Marker
						coordinate={{
							longitude: pinCoords.longitude,
							latitude: pinCoords.latitude,
						}}
					>
						<Entypo
							name="location-pin"
							size={50}
							// @ts-ignore
							color={colors[eventType]}
						/>
					</Marker>
				</MapView>
			</MapViewContainer>

			<AddressContainer>{displayCurrentAddress}</AddressContainer>
		</>
	);
};

const colors = {
	[EventTypeEnum.TRADE_OFFER]: "#3BBF91",
	[EventTypeEnum.ALERT]: "#F78C88",
	[EventTypeEnum.HAPPENING]: "#87CEFA",
};

export default Map;
