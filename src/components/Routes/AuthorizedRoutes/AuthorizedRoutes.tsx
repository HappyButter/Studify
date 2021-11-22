import React, { useContext } from "react";
import {
	createDrawerNavigator,
	DrawerContentScrollView,
	DrawerItemList,
	DrawerItem,
} from "@react-navigation/drawer";

import { AuthorizedRoutesList } from "@/types/types";
import MainViewRoutes from "./MainViewRoutes";
import EventViewRoutes from "./EventViewRoutes";

import { AuthContext } from "@/providers/Auth";
import { Profile } from "@/screens";

interface AuthorizedRouterProps {}

const MainDrawer = createDrawerNavigator();

const AuthorizedRoutes: React.FC<AuthorizedRouterProps> = () => {
	return (
		<MainDrawer.Navigator
			screenOptions={{ header: () => null, drawerPosition: "right", drawerType: "slide" }}
			initialRouteName="MainView"
			drawerContent={(props) => <CustomDrawerContent {...props} />}
		>
			<MainDrawer.Screen name="MainView" component={MainViewRoutes} />
			<MainDrawer.Screen name="EventView" component={EventViewRoutes} />
			<MainDrawer.Screen name="Profile" component={Profile} />
		</MainDrawer.Navigator>
	);
};

function CustomDrawerContent(props) {
	const { logout } = useContext(AuthContext);
	return (
		<DrawerContentScrollView {...props}>
			<DrawerItem label="Profile" onPress={() => props.navigation.navigate("Profile")} />
			<DrawerItem label="Messages" onPress={() => alert("Messages")} />
			<DrawerItem
				label="Logout"
				onPress={() => logout()}
				inactiveBackgroundColor="#ff000022"
				inactiveTintColor="#ff0000"
			/>
		</DrawerContentScrollView>
	);
}

export default AuthorizedRoutes;
