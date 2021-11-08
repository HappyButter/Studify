import React from "react";
import { Text } from "react-native";
import { EventTextInput } from "./Form.styles";

const EventFormField = (props: any) => {
	const {
		placeholder,
		field: { name, onBlur, onChange, value },
		form: { errors, touched, setFieldTouched },
		...inputProps
	} = props;

	const hasError = errors[name] && touched[name];
	return (
		<>
			<EventTextInput
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

export default EventFormField;
