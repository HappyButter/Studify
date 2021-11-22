import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { EventViewRoutesList } from "@/types/types";
import { EventDetails } from "@/screens";
import AddEvent from "@/screens/AddEvent";

interface EventViewRoutesProps {}

const EventViewStack = createStackNavigator<EventViewRoutesList>();

const EventView: React.FC<EventViewRoutesProps> = () => (
	<EventViewStack.Navigator screenOptions={{ header: () => null }}>
		<EventViewStack.Screen name="EventDetails" component={EventDetails} />
		<EventViewStack.Screen name="AddEventForm" component={AddEvent} />
	</EventViewStack.Navigator>
);

export default EventView;
