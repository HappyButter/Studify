import React, { useContext, useEffect } from "react";
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
import Toast from "react-native-toast-message";
import { useDispatch, useSelector } from "react-redux";
import { connectSocket, getAllEvents } from "@/state/actions";
import { StoreState } from "@/state/reducers";
import { getUsersChats, resetReduxOnLogout } from "@/state/actions";

interface AuthorizedRouterProps {}

const MainDrawer = createDrawerNavigator();

const AuthorizedRoutes: React.FC<AuthorizedRouterProps> = () => {
	const dispatch = useDispatch();
	const event = useSelector((store: StoreState) => store.events.notification);
	const { user } = useContext(AuthContext);

	useEffect(() => {
		if (user) {
			dispatch(connectSocket(user.uid, user.displayName || ""));
		}
	}, []);

	useEffect(() => {
		if (event) {
			Toast.show({
				type: "info",
				text1: event.eventName,
				text2: event.description,
			});
		}
	}, [event]);

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

	const handleLogout = () => {
		logout();
		resetReduxOnLogout();
	};

	return (
		<DrawerContentScrollView {...props}>
			<DrawerItem
				label="Profile"
				onPress={() =>
					props.navigation.navigate("SecondView", {
						screen: "Profile",
						params: { userId: user?.uid },
					})
				}
			/>
			<DrawerItem label="Messages" onPress={() => alert("Messages")} />
			<DrawerItem
				label="Logout"
				onPress={handleLogout}
				inactiveBackgroundColor="#ff000022"
				inactiveTintColor="#e60303"
			/>
		</DrawerContentScrollView>
	);
}

export default AuthorizedRoutes;
