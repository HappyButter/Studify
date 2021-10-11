import React from "react";
import { User } from "@/types/types";

const AuthContext = React.createContext<{
	user: User;
	login: () => void;
	logout: () => void;
}>({
	user: null,
	login: () => {},
	logout: () => {},
});

export default AuthContext;
