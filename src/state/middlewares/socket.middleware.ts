import { Middleware } from "redux";
import { io, Socket } from "socket.io-client";
import { ActionTypes, Action } from "../types/types";

const createSocketMiddleware = (): Middleware => {
	let socket: Socket | null = null;
	console.log("Socket middleware created");

	return (store) => (next) => (action: Action) => {
		switch (action.type) {
			case ActionTypes.SOCKET_CONNECT:
				if (socket) socket.close();

				socket = io("http://192.168.88.5:7312", {
					auth: { userId: "10", userName: "Andrzej" },
				});

				socket.on("event-all", (eventList) => {
					next({
						type: ActionTypes.RECEIVE_ALL_EVENTS,
						payload: {
							eventList,
						},
					});
				});

				socket.on("event-new", (eventData) => {
					next({
						type: ActionTypes.RECEIVE_NEW_EVENT,
						payload: {
							eventData,
						},
					});
				});

				socket.on("event-update", (eventData) => {
					next({
						type: ActionTypes.RECEIVE_UPDATE_EVENT,
						payload: {
							eventData,
						},
					});
				});

				socket.on("event-delete", (eventId) => {
					next({
						type: ActionTypes.RECEIVE_DELETE_EVENT,
						payload: {
							eventId,
						},
					});
				});

				socket.on("users-chats", (usersChats) => {
					next({
						type: ActionTypes.RECEIVE_USERS_CHATS,
						payload: {
							usersChats,
						},
					});
				});

				socket.on("chat-current", (currentChat) => {
					next({
						type: ActionTypes.RECEIVE_CURRENT_CHAT,
						payload: {
							currentChat,
						},
					});
				});

				socket.on("chat-delete", (eventId) => {
					next({
						type: ActionTypes.RECEIVE_DELETE_CHAT,
						payload: {
							eventId,
						},
					});
				});

				socket.on("message", (newMessage) => {
					next({
						type: ActionTypes.RECEIVE_NEW_MESSAGE,
						payload: {
							newMessage,
						},
					});
				});

			case ActionTypes.GET_ALL_EVENTS:
				socket?.emit("get-all-events");
				next(action);
				break;

			case ActionTypes.GET_USERS_CHATS:
				socket?.emit("get-users-chats");
				next(action);
				break;

			case ActionTypes.CREATE_EVENT:
				socket?.emit("create-event", action.payload);
				next(action);
				break;

			case ActionTypes.SEND_MESSAGE:
				socket?.emit("send-message", action.payload);
				next(action);
				break;

			case ActionTypes.SEND_VOTE:
				socket?.emit("vote", action.payload);
				next(action);
				break;

			default:
				return next(action);
		}
	};
};

export default createSocketMiddleware();