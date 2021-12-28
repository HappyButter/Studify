import React from "react";
import { NativeSyntheticEvent, NativeTouchEvent } from "react-native";
import { useFormikContext } from "formik";
import { CustomTouchableOpacity, ButtonTitle } from "./Form.styles";

interface EventFormSubmitButtonProps {
	title: string;
}

const EventFormSubmitButton: React.FC<EventFormSubmitButtonProps> = ({ title }) => {
	const { handleSubmit, isValid, errors } = useFormikContext();
	return (
		<CustomTouchableOpacity
			onPress={handleSubmit as unknown as (ev: NativeSyntheticEvent<NativeTouchEvent>) => void}
			disabled={!isValid}
		>
			<ButtonTitle>{title}</ButtonTitle>
		</CustomTouchableOpacity>
	);
};

export default EventFormSubmitButton;
