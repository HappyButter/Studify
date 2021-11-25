import React, { useContext } from "react";

import { UnauthorizedRouteProps } from "@/types/types";
import { AuthContext } from "@/providers/Auth";
import { LoginContainer, LoginTitle } from "./Login.styles";
import { Form, FormButton, FormField, FormPressableLink } from "@/components/Form";
import { Field } from "formik";

const Login: React.FC<UnauthorizedRouteProps<"Login">> = ({ navigation }) => {
	const { login } = useContext(AuthContext);

	return (
		<LoginContainer>
			<LoginTitle>Login</LoginTitle>
			<Form
				initialValues={{
					name: "",
					latitude: undefined,
					longitude: undefined,
				}}
				onSubmit={() => {
					login();
				}}
				// onSubmit={(values: any) => console.log(values)}
			>
				<Field component={FormField} name="email" placeholder="Email" multiline />
				<Field component={FormField} name="password" placeholder="Password" multiline />
				<FormButton title="Submit" />
				<FormPressableLink
					title={"Don't have an account?" + "\n" + " Sign Up!"}
					onPress={() => {
						navigation.navigate("Register");
					}}
				/>
			</Form>
		</LoginContainer>
	);
};

export default Login;
