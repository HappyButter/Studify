import { combineReducers } from "redux";
import { eventReducer } from "./event.reducer";
import { chatsReducer } from "./chats.reducer";
import { StudifyEvent, StudifyMessage } from "@/types/types";

export interface StoreState {
	events: {
		eventList: StudifyEvent[];
		notification: StudifyEvent | null;
	};
	chats: {
		usersChats: { [chatId: string]: StudifyMessage[] };
		currentChat: { [chatId: string]: StudifyMessage[] } | null;
		notification: { [chatId: string]: StudifyMessage } | null;
	};
}

const rootReducer = combineReducers<StoreState>({
	events: eventReducer,
	chats: chatsReducer,
});

export default rootReducer;
