import React, { useEffect, useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";

import Toast from "react-native-toast-message";
import { AuthContext } from "@/providers/Auth";
import AuthorizedRoutes from "./AuthorizedRoutes/AuthorizedRoutes";
import UnauthorizedRoutes from "./UnauthorizedRoutes/UnauthorizedRoutes";

interface RoutesProps {}

const Routes: React.FC<RoutesProps> = ({}) => {
	const { user } = useContext(AuthContext);

	useEffect(() => {
		if (user) {
			Toast.show({
				type: "success",
				text1: `Welcome back ${user.displayName}!`,
				topOffset: 70,
			});
		}
	}, [user]);

	return (
		<NavigationContainer>
			{user ? <AuthorizedRoutes /> : <UnauthorizedRoutes />}
		</NavigationContainer>
	);
};

export default Routes;
