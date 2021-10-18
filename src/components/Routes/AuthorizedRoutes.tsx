import React, { useContext } from "react";
import { Text, TouchableOpacity } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";

import { MainMap, MainList } from "@/screens";
import { AuthorizedRoutesList } from "@/types/types";
import { AuthContext } from "@/providers/Auth";

interface AuthorizedRoutesProps {}

const Tab = createBottomTabNavigator<AuthorizedRoutesList>();

const AuthorizedRoutes: React.FC<AuthorizedRoutesProps> = ({}) => {
	const { logout } = useContext(AuthContext);

	return (
		<Tab.Navigator
			screenOptions={({ route }) => ({
				tabBarIcon: ({ focused, color, size }) => {
					let iconName: React.ComponentProps<typeof Ionicons>["name"] | undefined;

					if (route.name === "Map") {
						iconName = focused ? "map" : "map-outline";
					} else if (route.name === "List") {
						iconName = focused ? "md-list-circle-sharp" : "md-list-circle-outline";
					}

					return <Ionicons name={iconName} size={size} color={color} />;
				},
				tabBarActiveTintColor: "tomato",
				tabBarInactiveTintColor: "gray",
			})}
		>
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
								<MaterialIcons
									name="logout"
									size={24}
									color="black"
									style={{ margin: 5, padding: 5 }}
								/>
							</TouchableOpacity>
						);
					},
				}}
			/>
			<Tab.Screen
				name="List"
				component={MainList}
				options={{
					headerRight: () => {
						return (
							<TouchableOpacity
								onPress={() => {
									logout();
								}}
							>
								<MaterialIcons
									name="logout"
									size={24}
									color="black"
									style={{ margin: 5, padding: 5 }}
								/>
							</TouchableOpacity>
						);
					},
				}}
			/>
		</Tab.Navigator>
	);
};

export default AuthorizedRoutes;
