import React, { useContext } from "react";

import { UnauthorizedRouteProps } from "@/types/types";
import { AuthContext } from "@/providers/Auth";
import { RegisterContainer, RegisterTitle } from "./Register.styles";
import { Form, FormButton, FormField, FormPressableLink } from "@/components/Form";
import { Field } from "formik";

const Register: React.FC<UnauthorizedRouteProps<"Register">> = ({ navigation }) => {
	const { register } = useContext(AuthContext);

	return (
		<RegisterContainer>
			<RegisterTitle>Register</RegisterTitle>
			<Form
				initialValues={{
					email: "",
					firstName: "",
					lastName: "",
					password: "",
				}}
				onSubmit={(values: {
					email: string;
					password: string;
					firstName: string;
					lastName: string;
				}) => {
					register({ ...values });
				}}
			>
				<Field component={FormField} name="email" placeholder="Email" multiline />
				<Field component={FormField} name="firstName" placeholder="First name" multiline />
				<Field component={FormField} name="lastName" placeholder="Last name" multiline />
				<Field
					component={FormField}
					name="password"
					placeholder="Password"
					secureTextEntry={true}
				/>
				<FormButton title="Submit" />
				<FormPressableLink
					title="Already Registred? Login!"
					onPress={() => {
						navigation.navigate("Login");
					}}
				/>
			</Form>
		</RegisterContainer>
	);
};

export default Register;
