import React from "react";
import { View, Text, StyleSheet, StatusBar, TouchableOpacity } from "react-native";

import { MainViewRoutesList, StudifyEvent } from "@/types/types";
import { StackNavigationProp } from "@react-navigation/stack";

interface EventListItemProps<Route extends keyof MainViewRoutesList> {
	event: StudifyEvent;
	navigation: StackNavigationProp<MainViewRoutesList, Route>;
}

const EventListItem: React.FC<EventListItemProps<"List">> = ({ event, navigation }) => (
	<TouchableOpacity onPress={() => navigation.navigate("EventDetails")}>
		<View style={styles.item}>
			<Text style={styles.title}>{event.eventName}</Text>
		</View>
	</TouchableOpacity>
);

const styles = StyleSheet.create({
	item: {
		backgroundColor: "#f9c2ff",
		padding: 20,
		marginVertical: 8,
	},
	header: {
		fontSize: 32,
		backgroundColor: "#fff",
	},
	title: {
		fontSize: 24,
	},
});

export default EventListItem;
