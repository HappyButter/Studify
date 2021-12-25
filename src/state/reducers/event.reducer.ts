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

			return {
				...state,
				eventList: [...(eventList || [])],
			};
		}
		case ActionTypes.RECEIVE_NEW_EVENT: {
			const { eventData } = action.payload;

			return {
				...state,
				eventList: [...(state.eventList || []), eventData],
				notification: eventData,
			};
		}
		case ActionTypes.RECEIVE_UPDATE_EVENT: {
			const { eventData } = action.payload;

			const eventIndex = state.eventList.findIndex((event) => event.id === eventData.id);

			eventIndex !== -1
				? (state.eventList[eventIndex] = eventData)
				: state.eventList.push(eventData);

			return { ...state };
		}
		case ActionTypes.RECEIVE_DELETE_EVENT: {
			const { eventId } = action.payload;

			return {
				...state,
				eventList: state.eventList.filter((event) => event.id !== eventId),
			};
		}

		default:
			return state;
	}
};
