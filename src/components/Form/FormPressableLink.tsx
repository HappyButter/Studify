import React from "react";

import { CustomPressableLink, PressableLinkTitle } from "./Form.styles";

interface FormPressableLinkProps {
	title: string;
	onPress: () => void;
}

const FormPressableLink: React.FC<FormPressableLinkProps> = ({ title, onPress }) => {
	return (
		<CustomPressableLink onPress={onPress}>
			<PressableLinkTitle>{title}</PressableLinkTitle>
		</CustomPressableLink>
	);
};

export default FormPressableLink;
