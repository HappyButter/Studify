import React from "react";
import { Button, Text } from "react-native";
import Center from "@/utils/Center";

const Profile = ({ navigation }) => {
	return (
		<Center>
			<Text>Profile!!!</Text>
			<Button title="Go Back" onPress={() => navigation.goBack()} />
		</Center>
	);
};

export default Profile;
