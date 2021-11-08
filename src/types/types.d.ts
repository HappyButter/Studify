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
	id: number;
	eventName: string;
	eventType: EventType;
	creationDate: string;
	expiryDate: string;
	description: string;
	longitude: number;
	latitude: number;
	authorId: number;
}

// Navigator lists
export type UnauthorizedRoutesList = {
	Welcome: undefined;
	Login: undefined;
	Register: undefined;
};

export type AuthorizedRoutesList = {
	MainView: undefined;
	EventDetails: undefined;
};

export type MainViewRoutesList = {
	Map: undefined;
	List: undefined;
	EventDetails: undefined;
};

export type EventViewRoutesList = {
	EventDetails: undefined;
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

export type EventViewRoutesProps<Route extends keyof EventViewRoutesList> = {
	navigation: StackNavigationProp<EventViewRoutesList, Route>;
	route: RouteProp<EventViewRoutesList, Route>;
};
