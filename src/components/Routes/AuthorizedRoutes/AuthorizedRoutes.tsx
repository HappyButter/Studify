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
// import { io } from "socket.io-client";
import { useDispatch, useSelector } from "react-redux";
import { connectSocket } from "@/store/actions";
import { StoreState } from "@/store/reducers";

// const socket = io("http://192.168.88.5:7312", { auth: { userId: "10", userName: "Andrzej" } });

interface AuthorizedRouterProps {}

const MainDrawer = createDrawerNavigator();

const AuthorizedRoutes: React.FC<AuthorizedRouterProps> = () => {
	const dispatch = useDispatch();
	const events = useSelector((store: StoreState) => store.events.eventList);

	useEffect(() => {
		dispatch(connectSocket());
	}, [dispatch]);

	useEffect(() => {
		const newEvent = events.slice(-1)[0];

		Toast.show({
			type: "info",
			text1: newEvent.eventName,
		});
		console.log(newEvent);
	}, [events]);

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
