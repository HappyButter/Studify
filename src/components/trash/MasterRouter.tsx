// import React from "react";
// import { createStackNavigator } from "@react-navigation/stack";
// import { StackNavigationProp } from "@react-navigation/stack";
// import { RouteProp } from "@react-navigation/native";

// import AuthorizedRoutes from "./MainViewRoutes";
// import { EventDetails } from "@/screens";

// type MasterRoutesList = {
// 	MainView: undefined;
// 	EventView: undefined;
// };

// type EventViewRoutesList = {
// 	EventDetails: undefined;
// };

// export type UnauthorizedRouteProps<Route extends keyof MasterRoutesList> = {
// 	navigation: StackNavigationProp<MasterRoutesList, Route>;
// 	route: RouteProp<MasterRoutesList, Route>;
// };

// const EventViewStack = createStackNavigator<EventViewRoutesList>();

// const EventView = () => (
// 	<EventViewStack.Navigator>
// 		<EventViewStack.Screen name="EventDetails" component={EventDetails} />
// 	</EventViewStack.Navigator>
// );

// interface MasterRouterProps {}

// const MasterStack = createStackNavigator<MasterRoutesList>();

// const UnauthorizedRoutes: React.FC<MasterRouterProps> = () => {
// 	return (
// 		<MasterStack.Navigator screenOptions={{ header: () => null }} initialRouteName="MainView">
// 			<MasterStack.Screen name="MainView" component={AuthorizedRoutes} />
// 			<MasterStack.Screen name="EventView" component={EventView} />
// 		</MasterStack.Navigator>
// 	);
// };

// export default UnauthorizedRoutes;
