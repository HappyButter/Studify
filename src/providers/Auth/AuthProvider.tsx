import React, { useState, useEffect } from "react";
import firebase from "firebase/compat/app";
import { User } from "@/types/types";

import "firebase/compat/auth";

import AuthContext from "./AuthContext";
import MessageBox from "../../screens/Chat/components/MessageBox/MessageBox";

interface AuthProviderProps {}

const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
	const [user, setUser] = useState<User | null>(null);
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
		firebase.initializeApp(firebaseConfig);
		firebase.auth().onAuthStateChanged((userState) => {
			if (userState) {
				const authUser: User = {
					uid: userState.uid,
					displayName: userState.displayName || "",
					email: userState.email || "",
				};
				setUser(authUser);
			} else {
				setUser(null);
			}
		});
	}, []);

	const login = (credentials: { email: string; password: string }): void => {
		firebase
			.auth()
			.signInWithEmailAndPassword(credentials.email, credentials.password)
			.then((cred) => {
				// console.log(cred.user);
			})
			.catch((err) => {
				alert("Invalid email or password.");
			});
	};

	const logout = () => {
		firebase.auth().signOut();
	};

	const register = (credentials: {
		email: string;
		password: string;
		firstName: string;
		lastName: string;
	}): void => {
		const { email, password, firstName, lastName } = credentials;

		firebase
			.auth()
			.createUserWithEmailAndPassword(email, password)
			.then((credential) => {
				if (credential) {
					credential.user
						?.updateProfile({
							displayName: firstName + " " + lastName,
						})
						.then(() => {
							const authUser: User = {
								uid: credential.user.uid,
								displayName: credential.user.displayName || "",
								email: credential.user.email || "",
							};
							setUser(authUser);
						});
				}
			})
			.catch((err) => {
				alert(err.message);
			});
	};

	return (
		<AuthContext.Provider
			value={{
				user,
				loading,
				error,
				login,
				register,
				logout,
			}}
		>
			{children}
		</AuthContext.Provider>
	);
};

export default AuthProvider;
