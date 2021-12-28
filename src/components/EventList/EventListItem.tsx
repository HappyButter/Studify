import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { EventTypeEnum, StudifyEvent } from "@/types/types.d";

interface EventListItemProps {
	event: StudifyEvent;
	navigation: any;
}

const EventListItem: React.FC<EventListItemProps> = ({ event, navigation }) => {
	return (
		<TouchableOpacity
			onPress={() =>
				navigation.navigate("SecondView", {
					screen: "EventDetails",
					params: { eventId: event.id },
				})
			}
			style={[{ borderLeftColor: colors[event.eventType] || "#000" }, styles.container]}
		>
			<Text style={styles.title}>{event.eventName}</Text>
			{event.eventType === EventTypeEnum.TRADE_OFFER ? (
				<>
					<Text style={styles.description}>Offers: {event.offer}</Text>
					<Text style={styles.description}>Expects: {event.receive}</Text>
				</>
			) : (
				<Text style={styles.description}>{event.description}</Text>
			)}
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: "column",
		borderLeftWidth: 5,
		padding: 25,
		marginVertical: 8,
		marginHorizontal: 16,
		borderRadius: 10,
		backgroundColor: "#d37d6b",
		alignItems: "center",
	},
	title: {
		alignSelf: "flex-start",
		fontSize: 20,
		bottom: 10,
	},
	description: {
		alignSelf: "flex-start",
		fontSize: 15,
	},
});

const colors = {
	[EventTypeEnum.TRADE_OFFER]: "#3BBF91",
	[EventTypeEnum.ALERT]: "#F78C88",
	[EventTypeEnum.HAPPENING]: "#87CEFA",
};

export default EventListItem;
