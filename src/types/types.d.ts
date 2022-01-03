import React from "react";

import { StackNavigationProp } from "@react-navigation/stack";
import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import { RouteProp } from "@react-navigation/native";

// User
export enum EventTypeEnum {
	TRADE_OFFER = "TradeOffer",
	ALERT = "Alert",
	HAPPENING = "Happening",
}
export type EventType = `${EventTypeEnum}`;

export type User = {
	uid: string;
	displayName: string;
	email: string;
} | null;

interface StudifyEvent {
	id: string;
	authorId: string;
	authorName: string;
	creationDate: string;
	description: string;
	eventName: string;
	eventType: EventType;
	eventTemperature: number;
	longitude: number;
	latitude: number;
	hasUserVoted: boolean;
	offer?: string;
	receive?: string;
}

interface StudifyMessage {
	authorId: string;
	authorName: string;
	message: string;
	timestamp: string;
}

// Navigator lists
export type UnauthorizedRoutesList = {
	Welcome: undefined;
	Login: undefined;
	Register: undefined;
};

export type AuthorizedRoutesList = {
	MainView: undefined;
	SecondView: undefined;
};

export type MainViewRoutesList = {
	Map: undefined;
	List: undefined;
	RedirectToAddEventForm: undefined;
};

export type SecondViewRoutesList = {
	EventDetails: { eventId: string };
	AddEventForm: undefined;
	Profile: { userId: string };
	Messages: undefined;
	Chat: { eventId: string };
};

// Screen props
export type UnauthorizedRouteProps<Route extends keyof UnauthorizedRoutesList> = {
	navigation: StackNavigationProp<UnauthorizedRoutesList, Route>;
	route: RouteProp<UnauthorizedRoutesList, Route>;
};

export type MainViewRouteProps<Route extends keyof MainViewRoutesList> = {
	navigation: StackNavigationProp<MainViewRoutesList, Route>;
	route: RouteProp<MainViewRoutesList, Route>;
};

export type SecondViewRouteProps<Route extends keyof SecondViewRoutesList> = {
	navigation: StackNavigationProp<SecondViewRoutesList, Route>;
	route: RouteProp<SecondViewRoutesList, Route>;
};
