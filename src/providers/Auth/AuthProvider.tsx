import React, { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

import AuthContext from "./AuthContext";
import { User } from "@/types/types";

interface AuthProviderProps {}

const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
	const [user, setUser] = useState<User>(null);

	const fakeUser = {
		id: 1,
		firstName: "Rick",
		lastName: "Sanchez",
		email: "rick@sanchez.com",
	};

	return (
		<AuthContext.Provider
			value={{
				user,
				login: () => {
					setUser(fakeUser);
					AsyncStorage.setItem("user", JSON.stringify(fakeUser));
				},
				logout: () => {
					setUser(null);
					AsyncStorage.removeItem("user");
				},
			}}
		>
			{children}
		</AuthContext.Provider>
	);
};

export default AuthProvider;
