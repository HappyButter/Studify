import { User } from "firebase/auth";
import React from "react";

const AuthContext = React.createContext<{
	user: User | null;
	loading: boolean;
	error: string | null;
	login: (email: string, pasword: string) => void;
	logout: () => void;
}>({
	user: null,
	loading: false,
	error: null,
	login: () => {},
	logout: () => {},
});

export default AuthContext;
