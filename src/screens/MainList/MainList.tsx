import React, { useEffect, useState } from "react";
import { Heading, Spinner } from "native-base";
import axios from "axios";

import Center from "@/utils/Center";
import { MainViewRouteProps, StudifyEvent } from "@/types/types";
import EventListItem from "./components/EventListItem";

const MainList: React.FC<MainViewRouteProps<"List">> = ({ navigation }) => {
	const [isLoading, setIsLoading] = useState(true);
	const [studifyEvents, setStudifyEvents] = useState<StudifyEvent[]>([]);

	useEffect(() => {
		fetchEvents();
	}, []);

	const fetchEvents = async () => {
		try {
			// const res = await axios.get<StudifyEvent[]>("http://192.168.240.229:7312/events");
			const res = await axios.get<StudifyEvent[]>("http://192.168.88.5:7312/events");
			// const res = await axios.get<StudifyEvent[]>("http://192.168.88.7:7312/events");
			setStudifyEvents(res.data);
			setIsLoading(false);
		} catch (err) {
			console.log(err);
		}
	};

	if (isLoading) {
		return (
			<Center>
				<Spinner size="lg" />
			</Center>
		);
	}

	return (
		<Center>
			{studifyEvents.map((event) => (
				<EventListItem event={event} navigation={navigation} />
			))}
		</Center>
	);
};

export default MainList;
