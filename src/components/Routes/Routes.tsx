import React, { useState, useEffect, useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { ActivityIndicator } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import Center from "@/utils/Center";
import { AuthContext } from "@/providers/Auth";
import AuthorizedRoutes from "./AuthorizedRoutes/AuthorizedRoutes";
import UnauthorizedRoutes from "./UnauthorizedRoutes/UnauthorizedRoutes";

interface RoutesProps {}

const Routes: React.FC<RoutesProps> = ({}) => {
	const { user, login } = useContext(AuthContext);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		// AsyncStorage.getItem("user")
		// 	.then((userString) => {
		// 		if (userString) {
		// 			login();
		// 		}
		// 		setLoading(false);
		// 	})
		// 	.catch((err) => {
		// 		console.log(err);
		// 	});
	}, []);

	if (loading) {
		return (
			<Center>
				<ActivityIndicator size="large" />
			</Center>
		);
	}

	return (
		<NavigationContainer>
			{user ? <AuthorizedRoutes /> : <UnauthorizedRoutes />}
		</NavigationContainer>
	);
};

export default Routes;
