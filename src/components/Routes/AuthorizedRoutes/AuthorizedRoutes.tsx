import React, { useContext } from "react";
import {
	createDrawerNavigator,
	DrawerContentScrollView,
	DrawerItemList,
	DrawerItem,
} from "@react-navigation/drawer";

import { AuthorizedRoutesList } from "@/types/types";
import MainViewRoutes from "./MainViewRoutes";
import SecondViewRoutes from "./SecondViewRoutes";

import { AuthContext } from "@/providers/Auth";

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
			<MainDrawer.Screen name="SecondView" component={SecondViewRoutes} />
		</MainDrawer.Navigator>
	);
};

function CustomDrawerContent(props: any) {
	const { logout, user } = useContext(AuthContext);
	return (
		<DrawerContentScrollView {...props}>
			<DrawerItem
				label="Profile"
				onPress={() =>
					props.navigation.navigate("SecondView", {
						screen: "Profile",
						params: { userId: user?.id },
					})
				}
			/>
			<DrawerItem label="Messages" onPress={() => alert("Messages")} />
			<DrawerItem
				label="Logout"
				onPress={() => logout()}
				inactiveBackgroundColor="#ff000022"
				inactiveTintColor="#e60303"
			/>
		</DrawerContentScrollView>
	);
}

export default AuthorizedRoutes;
