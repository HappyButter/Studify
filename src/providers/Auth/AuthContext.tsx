import React from "react";
import { User } from "@/types/types";

const AuthContext = React.createContext<{
	user: User | null;
	loading: boolean;
	error: string | null;
	login: (credentials: { email: string; password: string }) => void;
	register: (credentials: {
		email: string;
		password: string;
		firstName: string;
		lastName: string;
	}) => void;
	logout: () => void;
}>({
	user: null,
	loading: false,
	error: null,
	register: () => {},
	login: () => {},
	logout: () => {},
});

export default AuthContext;
