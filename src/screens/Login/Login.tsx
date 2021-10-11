import React, { useContext } from "react";

import {
	Button,
	Heading,
	NativeBaseProvider,
	Box,
	Text,
	VStack,
	FormControl,
	Input,
	Link,
	Icon,
	IconButton,
	HStack,
	Divider,
} from "native-base";

import Center from "@/utils/Center";
import { UnauthorizedRouteProps } from "@/types/types";
import { AuthContext } from "@/providers/Auth";

const Login: React.FC<UnauthorizedRouteProps<"Login">> = ({ navigation }) => {
	const { login } = useContext(AuthContext);

	return (
		<Box safeArea flex={1} p={2} w="90%" mx="auto">
			<Heading size="lg" color="primary.500">
				Welcome back :)
			</Heading>
			<Heading color="muted.400" size="xs">
				Login to Studify!
			</Heading>

			<VStack space={2} mt={5}>
				<FormControl>
					<FormControl.Label _text={{ color: "muted.700", fontSize: "sm", fontWeight: 600 }}>
						Email
					</FormControl.Label>
					<Input />
				</FormControl>
				<FormControl>
					<FormControl.Label _text={{ color: "muted.700", fontSize: "sm", fontWeight: 600 }}>
						Password
					</FormControl.Label>
					<Input type="password" />
				</FormControl>
				<VStack space={2} mt={5}>
					<Button
						onPress={() => {
							login();
						}}
					>
						Login
					</Button>
				</VStack>
			</VStack>

			<Button
				variant="ghost"
				onPress={() => {
					navigation.navigate("Register");
				}}
			>
				Don't have an account? Sign Up!
			</Button>
		</Box>
	);
};

export default Login;
