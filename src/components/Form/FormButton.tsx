import React from "react";
import { NativeSyntheticEvent, NativeTouchEvent } from "react-native";
import { useFormikContext } from "formik";
import { CustomPressableButton, ButtonTitle } from "./Form.styles";

interface FormSubmitButtonProps {
	title: string;
}

const FormSubmitButton: React.FC<FormSubmitButtonProps> = ({ title }) => {
	const { handleSubmit, isValid } = useFormikContext();
	return (
		<CustomPressableButton
			onPress={handleSubmit as unknown as (ev: NativeSyntheticEvent<NativeTouchEvent>) => void}
			disabled={!isValid}
		>
			<ButtonTitle>{title}</ButtonTitle>
		</CustomPressableButton>
	);
};

export default FormSubmitButton;
