import React from "react";
import { Text } from "react-native";
import { CustomTextInput } from "./Form.styles";

const FormField = (props: any) => {
	const {
		placeholder,
		field: { name, onBlur, onChange, value },
		form: { errors, touched, setFieldTouched },
		...inputProps
	} = props;

	const hasError = errors[name] && touched[name];
	return (
		<>
			<CustomTextInput
				placeholder={placeholder}
				placeholderTextColor={"#65657b"}
				onChangeText={(text) => onChange(name)(text)}
				onBlur={() => {
					setFieldTouched(name);
					onBlur(name);
				}}
				autoCapitalize="none"
				autoCorrect={false}
				value={value}
				{...inputProps}
			/>
			{hasError && <Text style={{ color: "red" }}>{errors[name]}</Text>}
		</>
	);
};

export default FormField;
