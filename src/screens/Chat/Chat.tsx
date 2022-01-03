import React, { useContext, useEffect, useState } from "react";
import { Text } from "react-native";
import { useSelector } from "react-redux";
import { ScrollView } from "./Chat.styles";
import Center from "@/utils/Center";
import { SecondViewRouteProps, StudifyMessage } from "@/types/types.d";
import { StoreState } from "@/state/reducers";

import { AuthContext } from "@/providers/Auth";
import { SendMessageForm } from "./components/SendMessageForm";
import { MessageBox } from "./components/MessageBox";

const Chat: React.FC<SecondViewRouteProps<"Chat">> = ({ navigation, route }) => {
	const { eventId } = route.params;

	const [chatMessages, setChatMessages] = useState<StudifyMessage[]>([]);
	const currentChat = useSelector((store: StoreState) => store.chats.currentChat);
	const { user } = useContext(AuthContext);

	useEffect(() => {
		if (currentChat) {
			const messagesList = currentChat[eventId];
			setChatMessages(messagesList);
		}
	}, [eventId, currentChat]);

	if (!user) return <Text>Something went wrong!</Text>;

	return (
		<Center>
			<ScrollView>
				{chatMessages.map((msg) => (
					<MessageBox key={msg.authorId + msg.timestamp} messageData={msg} userId={user.uid} />
				))}
			</ScrollView>
			<SendMessageForm eventId={eventId} />
		</Center>
	);
};

export default Chat;
