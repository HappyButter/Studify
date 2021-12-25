import { StudifyEvent } from "@/types/types";
import { ActionTypes } from "../types/types";

interface NewEventData {
	eventType: string;
	eventName: string;
	description: string;
	latitude: number;
	longitude: number;
	offer?: string;
	receive?: string;
}

export interface CreateEvent {
	type: ActionTypes.CREATE_EVENT;
	payload: { eventData: NewEventData };
}

export interface SendVote {
	type: ActionTypes.SEND_VOTE;
	payload: { eventId: string; vote: string };
}

export interface GetAllEvents {
	type: ActionTypes.GET_ALL_EVENTS;
	payload: null;
}

export interface ReceiveAllEvents {
	type: ActionTypes.RECEIVE_ALL_EVENTS;
	payload: {
		eventList: StudifyEvent[];
	};
}

export interface ReceiveNewEvent {
	type: ActionTypes.RECEIVE_NEW_EVENT;
	payload: {
		eventData: StudifyEvent;
	};
}

export interface ReceiveUpdateEvent {
	type: ActionTypes.RECEIVE_UPDATE_EVENT;
	payload: {
		eventData: StudifyEvent;
	};
}

export interface ReceiveDeleteEvent {
	type: ActionTypes.RECEIVE_DELETE_EVENT;
	payload: {
		eventId: string;
	};
}

export const getAllEvents = (): GetAllEvents => {
	return {
		type: ActionTypes.GET_ALL_EVENTS,
		payload: null,
	};
};

export const createEvent = (eventData: NewEventData): CreateEvent => {
	return {
		type: ActionTypes.CREATE_EVENT,
		payload: { eventData: { ...eventData } },
	};
};

export const sendVote = (eventId: string, vote: string): SendVote => {
	return {
		type: ActionTypes.SEND_VOTE,
		payload: { eventId, vote },
	};
};
