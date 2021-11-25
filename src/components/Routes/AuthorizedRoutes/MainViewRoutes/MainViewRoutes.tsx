import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation, DrawerActions } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View } from "native-base";
import { Ionicons } from "@expo/vector-icons";

import { MainMap, MainList } from "@/screens";
import { MainViewRoutesList } from "@/types/types";

function getTabBarIconName(routeName: string, focused: boolean) {
	let iconName: React.ComponentProps<typeof Ionicons>["name"] | undefined;

	if (routeName === "Map") {
		iconName = focused ? "map" : "map-outline";
	} else if (routeName === "List") {
		iconName = focused ? "md-list-circle-sharp" : "md-list-circle-outline";
	}

	return iconName;
}

interface MainViewRoutesProps {}

const Tab = createBottomTabNavigator<MainViewRoutesList>();

const MainViewRoutes: React.FC<MainViewRoutesProps> = () => {
	const navigation = useNavigation();

	function MenuBtn() {
		return (
			<TouchableOpacity onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
				<Ionicons name={"menu"} size={35} color={"black"} style={{ margin: 10 }} />
			</TouchableOpacity>
		);
	}

	function AddEventBtn() {
		return (
			<TouchableOpacity
				style={{
					top: -35,
					justifyContent: "center",
					alignItems: "center",
				}}
				onPress={() =>
					navigation.navigate(
						"SecondView" as never,
						{
							screen: "AddEventForm",
						} as never
					)
				}
			>
				<Ionicons name={"add-circle"} size={80} color={"red"} />
			</TouchableOpacity>
		);
	}

	const RedirectContent = () => <></>;

	return (
		<Tab.Navigator
			screenOptions={({ route }) => ({
				title: "Studify",
				headerStyle: {
					backgroundColor: "#925867",
				},
				headerRight: MenuBtn,
				tabBarActiveTintColor: "#D37D6B",
				tabBarInactiveTintColor: "gray",
				tabBarStyle: {
					position: "absolute",
					bottom: 15,
					left: 20,
					right: 20,
					backgroundColor: "#4E3B4B",
					borderRadius: 15,
					height: 75,
					...styles.shadow,
				},
				tabBarIcon: ({ focused, color, size }) => {
					return (
						<View style={{ alignItems: "center", justifyContent: "center", top: 3 }}>
							<Ionicons name={getTabBarIconName(route.name, focused)} size={size} color={color} />
						</View>
					);
				},
			})}
		>
			<Tab.Screen name="Map" component={MainMap} />
			<Tab.Screen
				name="RedirectToAddEventForm"
				component={RedirectContent}
				options={{ tabBarButton: AddEventBtn }}
			/>
			<Tab.Screen name="List" component={MainList} />
		</Tab.Navigator>
	);
};

const styles = StyleSheet.create({
	shadow: {
		shadowColor: "#7F5DF0",
		shadowOffset: {
			width: 0,
			height: 10,
		},
		shadowOpacity: 0.25,
		shadowRadius: 3.5,
		elevation: 5,
	},
});

export default MainViewRoutes;
