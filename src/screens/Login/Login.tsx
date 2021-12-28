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
					email: "",
					password: "",
				}}
				onSubmit={(values: { email: string; password: string }) => {
					login({ ...values });
				}}
			>
				<Field component={FormField} name="email" placeholder="Email" />
				<Field
					component={FormField}
					name="password"
					placeholder="Password"
					secureTextEntry={true}
				/>
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
