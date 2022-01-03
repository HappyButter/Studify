import {
	ConnectSocket,
	ConnectionEstablished,
	SendMessage,
	GetUsersChats,
	GetCurrentChat,
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
	ResetReduxOnLogout,
} from "../actions";

export const enum ActionTypes {
	SOCKET_CONNECT = "SOCKET_CONNECT",
	CONNECTION_ESTABLISHED = "CONNECTION_ESTABLISHED",
	SOCKET_DISCONNECT = "SOCKET_DISCONNECT",
	RESET_ON_LOGOUT = "RESET_ON_LOGOUT",

	CREATE_EVENT = "CREATE_EVENT",
	SEND_VOTE = "SEND_VOTE",
	GET_ALL_EVENTS = "GET_ALL_EVENTS",
	RECEIVE_ALL_EVENTS = "RECEIVE_ALL_EVENTS",
	RECEIVE_NEW_EVENT = "RECEIVE_NEW_EVENT",
	RECEIVE_UPDATE_EVENT = "RECEIVE_UPDATE_EVENT",
	RECEIVE_DELETE_EVENT = "RECEIVE_DELETE_EVENT",

	SEND_MESSAGE = "SEND_MESSAGE",
	GET_USERS_CHATS = "GET_USERS_CHATS",
	GET_CURRENT_CHAT = "GET_CURRENT_CHAT",
	RECEIVE_USERS_CHATS = "RECEIVE_USERS_CHATS",
	RECEIVE_CURRENT_CHAT = "RECEIVE_CURRENT_CHAT",
	RECEIVE_DELETE_CHAT = "RECEIVE_DELETE_CHAT",
	RECEIVE_NEW_MESSAGE = "RECEIVE_NEW_MESSAGE",
}

export type Action =
	| ConnectSocket
	| ConnectionEstablished
	| ResetReduxOnLogout
	| SendMessage
	| GetUsersChats
	| ReceiveUsersChats
	| ReceiveCurrentChat
	| ReceiveDeleteChat
	| ReceiveNewMessage
	| CreateEvent
	| SendVote
	| GetAllEvents
	| GetCurrentChat
	| ReceiveAllEvents
	| ReceiveNewEvent
	| ReceiveUpdateEvent
	| ReceiveDeleteEvent;
