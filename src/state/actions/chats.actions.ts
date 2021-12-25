import { StudifyMessage } from "@/types/types";
import { ActionTypes } from "../types/types";

export interface SendMessage {
	type: ActionTypes.SEND_MESSAGE;
	payload: {
		message: string;
		chatId: string;
	};
}

export interface GetUsersChats {
	type: ActionTypes.GET_USERS_CHATS;
	payload: null;
}

export interface ReceiveUsersChats {
	type: ActionTypes.RECEIVE_USERS_CHATS;
	payload: {
		usersChats: { [eventId: string]: StudifyMessage[] };
	};
}

export interface ReceiveCurrentChat {
	type: ActionTypes.RECEIVE_CURRENT_CHAT;
	payload: {
		currentChat: { [eventId: string]: StudifyMessage[] };
	};
}

export interface ReceiveDeleteChat {
	type: ActionTypes.RECEIVE_DELETE_CHAT;
	payload: {
		eventId: string;
	};
}

export interface ReceiveNewMessage {
	type: ActionTypes.RECEIVE_NEW_MESSAGE;
	payload: {
		newMessage: { [eventId: string]: StudifyMessage };
	};
}

export const sendMessage = (message: string, chatId: string): SendMessage => {
	return {
		type: ActionTypes.SEND_MESSAGE,
		payload: {
			message,
			chatId,
		},
	};
};

export const getUsersChats = (): GetUsersChats => {
	return {
		type: ActionTypes.GET_USERS_CHATS,
		payload: null,
	};
};
