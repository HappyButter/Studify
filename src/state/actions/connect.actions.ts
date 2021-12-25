import { ActionTypes } from "../types/types";

export interface ConnectSocket {
	type: ActionTypes.SOCKET_CONNECT;
	payload: null;
}

export interface DisconnectSocket {
	type: ActionTypes.SOCKET_DISCONNECT;
	payload: null;
}

export const connectSocket = (): ConnectSocket => {
	return {
		type: ActionTypes.SOCKET_CONNECT,
		payload: null,
	};
};

export const disconnectSocket = (): DisconnectSocket => {
	return {
		type: ActionTypes.SOCKET_DISCONNECT,
		payload: null,
	};
};
