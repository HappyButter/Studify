import { ActionTypes } from "../types/types";

export interface ConnectSocket {
	type: ActionTypes.SOCKET_CONNECT;
	payload: {
		userId: string;
		userName: string;
	};
}
export interface ConnectionEstablished {
	type: ActionTypes.CONNECTION_ESTABLISHED;
	payload: null;
}

export interface DisconnectSocket {
	type: ActionTypes.SOCKET_DISCONNECT;
	payload: null;
}

export interface ResetReduxOnLogout {
	type: ActionTypes.RESET_ON_LOGOUT;
	payload: null;
}

export const connectSocket = (userId: string, userName: string): ConnectSocket => {
	return {
		type: ActionTypes.SOCKET_CONNECT,
		payload: {
			userId,
			userName,
		},
	};
};

export const connectionEstablished = (): ConnectionEstablished => {
	return {
		type: ActionTypes.CONNECTION_ESTABLISHED,
		payload: null,
	};
};

export const disconnectSocket = (): DisconnectSocket => {
	return {
		type: ActionTypes.SOCKET_DISCONNECT,
		payload: null,
	};
};

export const resetReduxOnLogout = (): ResetReduxOnLogout => {
	return {
		type: ActionTypes.RESET_ON_LOGOUT,
		payload: null,
	};
};
