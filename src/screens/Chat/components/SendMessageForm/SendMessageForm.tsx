import React, { useState } from "react";
import { Text } from "react-native";
import { useDispatch } from "react-redux";
import { Ionicons } from "@expo/vector-icons";

import { sendMessage } from "@/state/actions";
import {
	SendMessageContainer,
	CustomTextInput,
	CustomPressableButton,
} from "./SendMessageForm.styles";

interface SendMessageFormProps {
	eventId: string;
}

const SendMessageForm: React.FC<SendMessageFormProps> = ({ eventId }) => {
	const [messageText, setMesageText] = useState<string>("");
	const dispatch = useDispatch();

	const handleSend = () => {
		dispatch(sendMessage(messageText, eventId));
		setMesageText("");
	};

	return (
		<SendMessageContainer>
			<CustomTextInput
				placeholder={"Aa"}
				placeholderTextColor={"#65657b"}
				onChangeText={(value) => setMesageText(value)}
				value={messageText}
			/>
			<CustomPressableButton onPress={handleSend} disabled={messageText.length === 0}>
				<Text>
					<Ionicons name={"send-outline"} size={22} color={"#fff"} />
				</Text>
			</CustomPressableButton>
		</SendMessageContainer>
	);
};

export default SendMessageForm;
