import React from "react";

import { StackNavigationProp } from "@react-navigation/stack";
import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import { RouteProp } from "@react-navigation/native";

export type User = {
	id: number;
	firstName: string;
	lastName: string;
	email: string;
} | null;

export type AuthorizedRoutesList = {
	Map: undefined;
	List: undefined;
};

export type UnauthorizedRoutesList = {
	Welcome: undefined;
	Login: undefined;
	Register: undefined;
};

export type UnauthorizedRouteProps<Route extends keyof UnauthorizedRoutesList> = {
	navigation: StackNavigationProp<UnauthorizedRoutesList, Route>;
	route: RouteProp<UnauthorizedRoutesList, Route>;
};

export type AuthorizedRouteProps<Route extends keyof AuthorizedRoutesList> = {
	navigation: BottomTabScreenProps<AuthorizedRoutesList, Route>;
	route: RouteProp<AuthorizedRoutesList, Route>;
};
