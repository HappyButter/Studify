import React, { useContext } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Text, TouchableOpacity } from "react-native";

import MainMap from "@/screens/MainMap";
import { AuthorizedRoutesList } from "@/types/types";
import { AuthContext } from "@/providers/Auth";

interface AuthorizedRoutesProps {}

const Tab = createBottomTabNavigator<AuthorizedRoutesList>();

const AuthorizedRoutes: React.FC<AuthorizedRoutesProps> = ({}) => {
	const { logout } = useContext(AuthContext);

	return (
		<Tab.Navigator>
			<Tab.Screen
				name="Map"
				component={MainMap}
				options={{
					headerRight: () => {
						return (
							<TouchableOpacity
								onPress={() => {
									logout();
								}}
							>
								<Text>LOGOUT</Text>
							</TouchableOpacity>
						);
					},
				}}
			/>
			{/* <Tab.Screen name="List" component={MainList} /> */}
		</Tab.Navigator>
	);
};

export default AuthorizedRoutes;
