import React from "react";
import { useSelector } from "react-redux";

import Center from "@/utils/Center";
import { MainViewRouteProps, StudifyEvent } from "@/types/types";
import { EventListItem } from "@/components/EventList";
import { StoreState } from "@/state/reducers";
import { ScrollView } from "./MainList.styles";

const MainList: React.FC<MainViewRouteProps<"List">> = ({ navigation }) => {
	const eventList = useSelector((store: StoreState) => store.events.eventList);

	return (
		<Center>
			<ScrollView>
				{eventList.map((event) => (
					<EventListItem event={event} navigation={navigation} key={event.id} />
				))}
			</ScrollView>
		</Center>
	);
};

export default MainList;
