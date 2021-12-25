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
	id: number;
	firstName: string;
	lastName: string;
	email: string;
} | null;

interface StudifyEvent {
	id: string;
	authorId: string;
	authorName: string;
	creationDate: string;
	description: Date;
	eventName: string;
	eventType: EventType;
	eventTemperature: number;
	longitude: number;
	latitude: number;
	hasUserVoted: boolean;
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
	EventDetails: undefined;
	AddEventForm: undefined;
	Profile: { userId: string };
	Messages: undefined;
};

// Screen props
export type UnauthorizedRouteProps<Route extends keyof UnauthorizedRoutesList> = {
	navigation: StackNavigationProp<UnauthorizedRoutesList, Route>;
	route: RouteProp<UnauthorizedRoutesList, Route>;
};

export type MainViewRouteProps<Route extends keyof MainViewRoutesList> = {
	navigation: BottomTabScreenProps<MainViewRoutesList, Route>;
	route: RouteProp<MainViewRoutesList, Route>;
};

export type SecondViewRouteProps<Route extends keyof SecondViewRoutesList> = {
	navigation: StackNavigationProp<SecondViewRoutesList, Route>;
	route: RouteProp<SecondViewRoutesList, Route>;
};
