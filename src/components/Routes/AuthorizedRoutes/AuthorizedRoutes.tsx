import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import MainViewRoutes from "./MainViewRoutes";
// import EventViewRoutes from "./EventViewRoutes";
import { AuthorizedRoutesList } from "@/types/types";
import { EventDetails } from "@/screens";

interface AuthorizedRouterProps {}

const MasterStack = createStackNavigator<AuthorizedRoutesList>();

const AuthorizedRoutes: React.FC<AuthorizedRouterProps> = () => {
	return (
		<MasterStack.Navigator screenOptions={{ header: () => null }} initialRouteName="MainView">
			<MasterStack.Screen name="MainView" component={MainViewRoutes} />
			<MasterStack.Screen name="EventDetails" component={EventDetails} />
			{/* <MasterStack.Screen name="EventView" component={EventViewRoutes} /> */}
		</MasterStack.Navigator>
	);
};

export default AuthorizedRoutes;
