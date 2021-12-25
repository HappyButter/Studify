import {
	ConnectSocket,
	SendMessage,
	GetUsersChats,
	ReceiveUsersChats,
	ReceiveCurrentChat,
	ReceiveDeleteChat,
	ReceiveNewMessage,
	CreateEvent,
	SendVote,
	GetAllEvents,
	ReceiveAllEvents,
	ReceiveNewEvent,
	ReceiveUpdateEvent,
	ReceiveDeleteEvent,
} from "../actions";

export enum ActionTypes {
	SOCKET_CONNECT = "SOCKET_CONNECT",
	SOCKET_DISCONNECT = "SOCKET_DISCONNECT",

	CREATE_EVENT = "CREATE_EVENT",
	SEND_VOTE = "SEND_VOTE",
	GET_ALL_EVENTS = "GET_ALL_EVENTS",
	RECEIVE_ALL_EVENTS = "RECEIVE_ALL_EVENTS",
	RECEIVE_NEW_EVENT = "RECEIVE_NEW_EVENT",
	RECEIVE_UPDATE_EVENT = "RECEIVE_NEW_EVENT",
	RECEIVE_DELETE_EVENT = "RECEIVE_DELETE_EVENT",

	SEND_MESSAGE = "SEND_MESSAGE",
	GET_USERS_CHATS = "GET_USERS_CHATS",
	RECEIVE_USERS_CHATS = "RECEIVE_USERS_CHATS",
	RECEIVE_CURRENT_CHAT = "RECEIVE_CHAT_CURRENT",
	RECEIVE_DELETE_CHAT = "RECEIVE_CHAT_DELETE",
	RECEIVE_NEW_MESSAGE = "RECEIVE_NEW_MESSAGE",
}

export type Action =
	| ConnectSocket
	| SendMessage
	| GetUsersChats
	| ReceiveUsersChats
	| ReceiveCurrentChat
	| ReceiveDeleteChat
	| ReceiveNewMessage
	| CreateEvent
	| SendVote
	| GetAllEvents
	| ReceiveAllEvents
	| ReceiveNewEvent
	| ReceiveUpdateEvent
	| ReceiveDeleteEvent;
