import { StudifyMessage } from "@/types/types";
import { Action, ActionTypes } from "../types/types";

interface InitialEventState {
	usersChats: { [chatId: string]: StudifyMessage[] };
	currentChat: { [chatId: string]: StudifyMessage[] } | null;
	notification: { [chatId: string]: StudifyMessage } | null;
}

const initialState: InitialEventState = {
	usersChats: {},
	currentChat: null,
	notification: null,
};

export const chatsReducer = (state = initialState, action: Action) => {
	switch (action.type) {
		case ActionTypes.RECEIVE_USERS_CHATS: {
			const { usersChats } = action.payload;

			return {
				...state,
				usersChats: { ...usersChats },
			};
		}
		case ActionTypes.RECEIVE_CURRENT_CHAT: {
			const { currentChat } = action.payload;

			return {
				...state,
				currentChat: { ...currentChat },
			};
		}
		case ActionTypes.RECEIVE_NEW_MESSAGE: {
			const { newMessage } = action.payload;
			const eventId = Object.keys(newMessage)[0];

			return {
				...state,
				usersChats: {
					...state.usersChats,
					[eventId]: [...(state.usersChats[eventId] || []), { ...newMessage[eventId] }],
				},
				currentChat: {
					[eventId]: [
						...(state.currentChat ? state.currentChat[eventId] : []),
						{ ...newMessage[eventId] },
					],
				},
				notification: { ...newMessage },
			};
		}
		case ActionTypes.RESET_ON_LOGOUT: {
			return { ...initialState };
		}

		default:
			return state;
	}
};
