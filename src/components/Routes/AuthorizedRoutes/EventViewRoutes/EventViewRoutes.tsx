import { createStackNavigator } from "@react-navigation/stack";
import { EventViewRoutesList } from "@/types/types";
import { EventDetails } from "@/screens";

const EventViewStack = createStackNavigator<EventViewRoutesList>();

const EventView = () => (
	<EventViewStack.Navigator>
		<EventViewStack.Screen name="EventDetails" component={EventDetails} />
	</EventViewStack.Navigator>
);

export default EventView;
