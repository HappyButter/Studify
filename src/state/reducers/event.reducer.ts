import { StudifyEvent } from "@/types/types";
import { Action, ActionTypes } from "../types/types";

interface InitialEventState {
	eventList: StudifyEvent[];
	notification: StudifyEvent | null;
}

const initialState: InitialEventState = {
	eventList: [],
	notification: null,
};

export const eventReducer = (state = initialState, action: Action) => {
	switch (action.type) {
		case ActionTypes.RECEIVE_ALL_EVENTS: {
			const { eventList } = action.payload;

			const sorted = eventList.sort(
				(a, b) => new Date(b.creationDate).getTime() - new Date(a.creationDate).getTime()
			);

			return {
				...state,
				eventList: [...(sorted || [])],
			};
		}
		case ActionTypes.RECEIVE_NEW_EVENT: {
			const { eventData } = action.payload;

			return {
				...state,
				eventList: [eventData, ...(state.eventList || [])],
				notification: eventData,
			};
		}
		case ActionTypes.RECEIVE_UPDATE_EVENT: {
			const { eventData } = action.payload;

			return {
				...state,
				eventList: [...state.eventList.filter((event) => event.id !== eventData.id), eventData],
			};
		}
		case ActionTypes.RECEIVE_DELETE_EVENT: {
			const { eventId } = action.payload;

			return {
				...state,
				eventList: state.eventList.filter((event) => event.id !== eventId),
			};
		}
		case ActionTypes.RESET_ON_LOGOUT: {
			return { ...initialState };
		}

		default:
			return state;
	}
};
