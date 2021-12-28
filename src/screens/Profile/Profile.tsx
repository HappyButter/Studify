import React, { useContext, useEffect, useState } from "react";
import { View, StatusBar, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import {
	ProfileContainer,
	PersonDetails,
	PersonDetailsAvatar,
	PersonDetailsData,
	PersonDetailsText,
	PersonDetailsGoBackArea,
	GoBackButton,
	ScrollView,
} from "./Profile.styles";

import { AuthContext } from "@/providers/Auth";
import { SecondViewRouteProps, StudifyEvent } from "@/types/types";
import { useSelector } from "react-redux";
import { StoreState } from "@/state/reducers";
import { EventListItem } from "@/components/EventList";

const Profile: React.FC<SecondViewRouteProps<"Profile">> = ({ navigation, route }) => {
	const [usersEvents, setUsersEvents] = useState<StudifyEvent[]>([]);
	const { userId } = route.params;
	const { user } = useContext(AuthContext);
	const eventList = useSelector((store: StoreState) => store.events.eventList);

	useEffect(() => {
		const filteredEventList = eventList.filter((event) => event.authorId === userId);
		setUsersEvents(filteredEventList);
	}, [eventList]);

	return (
		<ProfileContainer>
			<ScrollView stickyHeaderIndices={[0]}>
				<PersonDetails>
					<PersonDetailsAvatar>
						<Ionicons name={"person-circle"} size={100} color={"#fff"} />
					</PersonDetailsAvatar>
					<PersonDetailsData>
						<PersonDetailsText>{user?.displayName}</PersonDetailsText>
						<PersonDetailsText>{user?.email}</PersonDetailsText>
					</PersonDetailsData>
					<PersonDetailsGoBackArea>
						<GoBackButton onPress={() => navigation.goBack()}>
							<View>
								<Ionicons name={"arrow-undo-sharp"} size={20} color={"#fff"} />
							</View>
						</GoBackButton>
					</PersonDetailsGoBackArea>
				</PersonDetails>

				{usersEvents.map((event) => (
					<EventListItem event={event} key={event.id} navigation={navigation} />
				))}
			</ScrollView>
		</ProfileContainer>
	);
};

export default Profile;
