import React, { useContext } from "react";
import { TouchableOpacity } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";

import { MainMap, MainList } from "@/screens";
import { MainViewRoutesList } from "@/types/types";
import { AuthContext } from "@/providers/Auth";

function getTabBarIconName(routeName: string, focused: boolean) {
	let iconName: React.ComponentProps<typeof Ionicons>["name"] | undefined;

	if (routeName === "Map") {
		iconName = focused ? "map" : "map-outline";
	} else if (routeName === "List") {
		iconName = focused ? "md-list-circle-sharp" : "md-list-circle-outline";
	}

	return iconName;
}

interface AuthorizedRoutesProps {}

const Tab = createBottomTabNavigator<MainViewRoutesList>();

const MainViewRoutes: React.FC<AuthorizedRoutesProps> = ({}) => {
	const { logout } = useContext(AuthContext);

	return (
		<Tab.Navigator
			screenOptions={({ route }) => ({
				tabBarActiveTintColor: "tomato",
				tabBarInactiveTintColor: "gray",
				tabBarIcon: ({ focused, color, size }) => {
					return (
						<Ionicons name={getTabBarIconName(route.name, focused)} size={size} color={color} />
					);
				},
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

export default MainViewRoutes;
