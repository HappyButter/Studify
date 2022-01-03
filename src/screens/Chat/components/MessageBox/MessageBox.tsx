import React from "react";

import { StudifyMessage } from "@/types/types.d";
import { MessageBoxContainer, CustomText, Text } from "./MessageBox.styles";

interface MessageBoxProps {
	messageData: StudifyMessage;
	userId: string;
}

const MessageBox: React.FC<MessageBoxProps> = ({ messageData, userId }) => {
	const isOwner = messageData.authorId === userId;

	return (
		<MessageBoxContainer>
			<Text>{isOwner ? "You" : messageData.authorName}</Text>
			<CustomText style={{ backgroundColor: isOwner ? "#925867" : "#303245" }}>
				{messageData.message}
			</CustomText>
		</MessageBoxContainer>
	);
};

export default MessageBox;
