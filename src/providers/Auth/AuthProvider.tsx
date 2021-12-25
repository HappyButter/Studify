import React, { useState, useEffect } from "react";
import firebase from "firebase/compat/app";
// import { User } from "firebase/auth";

import "firebase/compat/auth";
import "firebase/compat/database";

import AuthContext from "./AuthContext";
import { User } from "@/types/types";

interface AuthProviderProps {}

const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
	const [user, setUser] = useState<User>(null);
	const [loading, setLoading] = useState<boolean>(false);
	const [error, setError] = useState<string | null>(null);

	const firebaseConfig = {
		apiKey: process.env.API_KEY,
		authDomain: process.env.AUTH_DOMAIN,
		projectId: process.env.PROJECT_ID,
		storageBucket: process.env.STORAGE_BUCKET,
		messagingSenderId: process.env.MESSAGING_SENDER_ID,
		appId: process.env.APP_ID,
	};

	useEffect(() => {
		// firebase.initializeApp(firebaseConfig);
		// firebase.auth().onAuthStateChanged((userState) => {
		// 	setUser(userState);
		// });
		setUser({
			id: 123,
			firstName: "string",
			lastName: "string",
			email: "string",
		});
	}, []);

	const login = (email: string, pasword: string): void => {
		// firebase
		// 	.auth()
		// 	.signInWithEmailAndPassword(email, pasword)
		// 	.then((cred) => {
		// 		// console.log(cred.user);
		// 	})
		// 	.catch((err) => {
		// 		console.log(err);
		// 	});
	};

	const logout = () => {
		// firebase.auth().signOut();
	};

	return (
		<AuthContext.Provider
			value={{
				user,
				loading,
				error,
				login,
				logout,
			}}
		>
			{children}
		</AuthContext.Provider>
	);
};

export default AuthProvider;
