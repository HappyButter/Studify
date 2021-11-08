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

const Register: React.FC<UnauthorizedRouteProps<"Register">> = ({ navigation }) => {
	const { login } = useContext(AuthContext);

	return (
		<Box safeArea flex={1} p={2} w="90%" mx="auto">
			<Heading size="lg" color="primary.500">
				Welcome
			</Heading>
			<Heading color="muted.400" size="xs">
				Sign up to Studify!
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
				<FormControl>
					<FormControl.Label _text={{ color: "muted.700", fontSize: "sm", fontWeight: 600 }}>
						Confirm Password
					</FormControl.Label>
					<Input type="password" />
				</FormControl>
				<VStack space={2} mt={5}>
					<Button
						onPress={() => {
							login();
						}}
					>
						Register
					</Button>
				</VStack>
			</VStack>

			<Button
				variant="ghost"
				onPress={() => {
					navigation.navigate("Login");
				}}
			>
				Already Registred? Login!
			</Button>
		</Box>
	);
};

export default Register;
