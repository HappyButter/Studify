import React, { useEffect, useState } from "react";
import { Button, View, Text } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import {
	Avatar,
	EventContent,
	EventHeader,
	EventHeaderData,
	EventHeaderGoBackArea,
	EventHeaderText,
	EventVoter,
	GoBackButton,
	ScrollView,
	VoterLeft,
	VoterRight,
	VoterTemperature,
	ChatBtnBox,
	ChatBtn,
} from "./EventDetails.styles";
import Center from "@/utils/Center";
import { SecondViewRouteProps } from "@/types/types";
import { StoreState } from "@/state/reducers";
import { StudifyEvent, EventTypeEnum } from "@/types/types.d";
import { Ionicons } from "@expo/vector-icons";
import { Map } from "./components";
import { getCurrentChat, sendVote } from "@/state/actions";

const EventDetails: React.FC<SecondViewRouteProps<"EventDetails">> = ({ navigation, route }) => {
	const [eventData, setEventData] = useState<StudifyEvent | null>(null);
	const { eventId } = route.params;
	const eventList = useSelector((store: StoreState) => store.events.eventList);
	const dispatch = useDispatch();

	useEffect(() => {
		const currentEvent = eventList.find((event) => event.id === eventId);
		setEventData((prev) => currentEvent || null);

		dispatch(getCurrentChat(eventId));
	}, [eventList, eventId]);

	const handleVote = (eventId: string, vote: string) => {
		dispatch(sendVote(eventId, vote));
	};

	return (
		<Center>
			<ScrollView>
				<EventHeader>
					<Avatar>
						{eventData && (
							<Ionicons // @ts-ignore
								name={avatars[eventData.eventType] || "construct-outline"}
								size={100}
								color={"#fff"}
							/>
						)}
					</Avatar>
					<EventHeaderData>
						<EventHeaderText style={{ fontSize: 25 }}>{eventData?.eventName}</EventHeaderText>
						<EventHeaderText style={{ fontSize: 18 }}>{eventData?.authorName}</EventHeaderText>
					</EventHeaderData>
					<EventHeaderGoBackArea>
						<GoBackButton onPress={() => navigation.goBack()}>
							<View>
								<Ionicons name={"arrow-undo-sharp"} size={20} color={"#fff"} />
							</View>
						</GoBackButton>
					</EventHeaderGoBackArea>
				</EventHeader>

				{eventData && (
					<>
						<EventContent>{"description:\n" + eventData.description}</EventContent>
						<Map
							latitude={eventData.latitude}
							longitude={eventData.longitude}
							eventType={eventData.eventType}
						/>
						<ChatBtnBox>
							<ChatBtn
								onPress={() => {
									navigation.navigate(
										"SecondView" as never,
										{
											screen: "Chat",
											params: { eventId: eventData.id },
										} as never
									);
								}}
							>
								<Text>
									<Ionicons name={"chatbox-outline"} size={100} color={"#fff"} />
								</Text>
							</ChatBtn>
						</ChatBtnBox>
						<EventVoter>
							<VoterLeft
								onPress={() => handleVote(eventData.id, "like")}
								disabled={eventData.hasUserVoted}
							>
								<Text>
									<Ionicons
										name={"thumbs-up-outline"}
										size={80}
										color={eventData.hasUserVoted ? "#999999" : "#fff"}
									/>
								</Text>
							</VoterLeft>
							<VoterTemperature>
								<EventHeaderText style={{ fontSize: 45 }}>
									{eventData.eventTemperature}
								</EventHeaderText>
							</VoterTemperature>
							<VoterRight
								onPress={() => handleVote(eventData.id, "dislike")}
								disabled={eventData.hasUserVoted}
							>
								<Text>
									<Ionicons
										name={"thumbs-down-outline"}
										size={80}
										color={eventData.hasUserVoted ? "#999999" : "#fff"}
									/>
								</Text>
							</VoterRight>
						</EventVoter>
					</>
				)}
			</ScrollView>
		</Center>
	);
};
const avatars = {
	[EventTypeEnum.ALERT]: "alert-circle-outline",
	[EventTypeEnum.HAPPENING]: "basketball-outline",
	[EventTypeEnum.TRADE_OFFER]: "repeat-outline",
};

export default EventDetails;
