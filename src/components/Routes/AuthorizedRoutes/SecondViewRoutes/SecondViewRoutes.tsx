import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { SecondViewRoutesList } from "@/types/types";
import { EventDetails, Profile } from "@/screens";
import AddEvent from "@/screens/AddEvent";
import { DrawerActions, useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

interface SecondViewRoutesProps {}

const SecondViewStack = createStackNavigator<SecondViewRoutesList>();

const SecondViewRoutes: React.FC<SecondViewRoutesProps> = () => {
	const navigation = useNavigation();

	function MenuBtn() {
		return (
			<TouchableOpacity onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
				<Ionicons name={"menu"} size={35} color={"black"} style={{ margin: 10 }} />
			</TouchableOpacity>
		);
	}
	return (
		<SecondViewStack.Navigator
			screenOptions={{
				title: "Studify",
				headerRight: MenuBtn,
				headerLeft: () => null,
				headerStyle: {
					backgroundColor: "#925867",
				},
			}}
			initialRouteName="AddEventForm"
		>
			<SecondViewStack.Screen name="EventDetails" component={EventDetails} />
			<SecondViewStack.Screen name="AddEventForm" component={AddEvent} />
			<SecondViewStack.Screen name="Profile" component={Profile} />
		</SecondViewStack.Navigator>
	);
};

export default SecondViewRoutes;
