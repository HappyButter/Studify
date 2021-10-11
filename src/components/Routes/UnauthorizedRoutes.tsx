import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Login, Register, Welcome } from "@/screens";
import { UnauthorizedRoutesList } from "@/types/types";

interface UnauthorizedRouteProps {}

const UnauthorizedStack = createStackNavigator<UnauthorizedRoutesList>();

const UnauthorizedRoutes: React.FC<UnauthorizedRouteProps> = () => {
	return (
		<UnauthorizedStack.Navigator screenOptions={{ header: () => null }} initialRouteName="Welcome">
			<UnauthorizedStack.Screen name="Welcome" component={Welcome} />
			<UnauthorizedStack.Screen name="Login" component={Login} />
			<UnauthorizedStack.Screen name="Register" component={Register} />
		</UnauthorizedStack.Navigator>
	);
};

export default UnauthorizedRoutes;
